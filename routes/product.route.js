const express = require('express');
const router = express.Router();

//Require the controllers WHICH WE DID NOT CREATE YET
const product_controller = require('../controllers/product.controller');

//a somple test url to check that all of our files are communicating correctly

router.get('/test', product_controller.test);

module.exports = router;
