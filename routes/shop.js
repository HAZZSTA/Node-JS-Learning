const path = require('path');//import path module

const express = require('express');//import express module

const rootDir = require('../util/path.js');//import custom root path module
const adminData = require('./admin');//import admin data objects from admin file

const router = express.Router();


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });//this object contains variables that arepassed into the EJS template (just the vars not the object itself)
});

module.exports = router;//export this routes file