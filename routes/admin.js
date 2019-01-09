const path = require('path');//import path module
const express = require('express');//import express module

const router = express.Router();//import router function

//register endpoints to router export//get keyword property matches exact path speified
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});//this post requets will not be seen (middleware filtering)

module.exports = router;//export this routes file