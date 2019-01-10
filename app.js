//Import modules
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

//register express in this file
const app = express();

//import routes files:
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');



//register parsing handler:
app.use(bodyparser.urlencoded({extended: false}));

//register static middleware for serving static files like css links in the views html files.
app.use(express.static(path.join(__dirname, 'public')));

//register routes from routes variables:
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//page not found send status 404-no path filter to catch all unknown urls:
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//start server:
app.listen(3000);