const express = require('express');//import express module

const router = express.Router();//import router function

//register endpoints to router export//get keyword property matches exact path speified
router.get("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</form>');
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});//this post requets will not be seen (middleware filtering)

module.exports = router;//export admin routes file