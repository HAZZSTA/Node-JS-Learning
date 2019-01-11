const path = require('path');//import path module

const express = require('express');//import express module

const rootDir = require('../util/path.js');//import custom root path module
const adminData = require('./admin');//import admin data objects from admin file

const router = express.Router();



router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});//render pug template file for response 
});

module.exports = router;//export this routes file