/*BASIC LOGIC THAT IS MADE EASIER BY EXPRESS- THIS LOGIC USED FOR LESSON*/

//Import http module
const http = require('http');

//Import routes custom file from routes exprt method
const routes = require("./routes");

//Create server-Request listener executes for every incoming request
const server = http.createServer(routes);

//Listen for requests - takes arguments for ports, hostnames, etc but dev no host name defaults to localhost (this machine). Test in browser by navigating to localhost:3000
server.listen(3000);