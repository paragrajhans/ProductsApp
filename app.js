const express = require("express");
const bodyParser = require("body-Parser");

const product = require('./routes/product.route'); //import routes for products)

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://user1:vidhya99@ds129454.mlab.com:29454/products';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = 1234;

app.listen(port, () => {
    console.log("Server is up");
});