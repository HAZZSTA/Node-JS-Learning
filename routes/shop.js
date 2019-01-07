const express = require('express');//import express module

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send('<h2>This is the root.</h2>');
});

module.exports = router;