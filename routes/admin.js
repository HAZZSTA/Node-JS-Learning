const path = require('path');//import path module
const express = require('express');//import express module

const productsController = require('../Controllers/products')//import AddProduct controller file

const rootDir = require('../util/path.js');//import custom root path module

const router = express.Router();//import router function


//register endpoints to router export//get keyword property matches exact path speified
// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddproduct);//this post requets will not be seen (middleware filtering)

module.exports = router;//export this routes file