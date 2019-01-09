const path = require('path');//import path module

const express = require('express');//import express module

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));//path.join uses __dirnaame to points to this files's prent folder and ../ goes up one folder. sub folders are then comma seperated
});

module.exports = router;//export this routes file