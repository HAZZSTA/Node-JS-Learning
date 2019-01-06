//import express
const express = require('express');
//activate express
const app = express();

//add middleware
//app.use((req, res, next) => {
    //console.log('First middleware');
    //next();
//});

//app.use((req, res, next) => {
 //   console.log('Second middleware');
 //   res.send('<p>Assignment solved</p>');
//});

app.use('/users', (req,res,next) => {
    console.log('/ users middleware');
    res.send('<p>users middleware handler</p>')
});

//"/" is not a specific location(all locations as long as they start with "/"), so this will be seen every time unless it is last in order
app.use('/', (req,res,next) => {
    console.log('/ middleware');
    res.send('<p>middleware handler</p>')
});


//start up server
app.listen(4000);


