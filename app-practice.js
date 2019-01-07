const express = require(express); //import express module
const app = express(); //activate express on "app" keyword

app.use(("/users"), req, res, next => {
    console.log("users endpoint");
    app.send("<p>User list: </p><ul><li>User A</li><li>User B</li><li>User C</li></ul>");
});

app.use(("/"), req, res, next => {
    console.log("root endpoint");
    app.send("<h1>This is the root of this app</h1>");
});

app.listen(4000);

