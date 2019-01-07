//Import modules
const express = require('express');
const bodyparser = require('body-parser');

//register express in this file
const app = express();

//import routes files:
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

//register parsing handler:
app.use(bodyparser.urlencoded({extended: false}));

//register routes from routes variables:
app.use(adminRoutes);
app.use(shopRoutes);

//page not found send status 404:
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

//start server:
app.listen(3000);