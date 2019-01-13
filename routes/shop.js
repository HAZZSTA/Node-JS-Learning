const path = require('path');//import path module

const express = require('express');//import express module

const productsController = require('../Controllers/products')

const router = express.Router();


router.get('/', productsController.getProducts);

module.exports = router;//export this routes file