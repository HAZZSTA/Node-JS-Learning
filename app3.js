const express = require('express');//import express module
const app = express();//activate express in this app

app.use("/users", (req, res, next) => {
    console.log('Middleware 2');
    app.send('<p>User list: </p><ul><li>User A</li><li>User B</li><li>User C</li></ul>');
});

app.use("/", (req, res, next) => {
    console.log('Middleware 1');
    app.send('<h1>this is the root of this app!</h1>');
});


//start server
app.listen(4000);