//Import modules
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

//register express in this file
const app = express();

const errorController = require('./Controllers/error')//import error controller file

app.set('view engine', 'ejs');//activate templating engine (EJS)
app.set('views', 'views');//tell templating engine where to find templates

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
app.use(errorController.get404);

//start server:
app.listen(3000);