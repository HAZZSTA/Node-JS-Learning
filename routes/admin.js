const path = require('path');//import path module
const express = require('express');//import express module

const rootDir = require('../util/path.js');//import custom root path module

const router = express.Router();//import router function

const products = [];


//register endpoints to router export//get keyword property matches exact path speified
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });//this object contains variables that arepassed into the EJS template (just the vars not the object itself)
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});//this post requets will not be seen (middleware filtering)

exports.routes = router;//export this routes file
exports.products = products;