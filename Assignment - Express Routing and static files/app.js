//Import Express
const express = require('express');

//Import Path module
const path = require('path');

//import Routes file
const mainRoutes = require('./routes/index');

//Register Express
const app = express();

//Register static folder location
app.use(express.static(path.join(__dirname, 'public')));

//Register routes as middleware
app.use(mainRoutes);

//Start server
app.listen(4000);