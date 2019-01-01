/*BASIC LOGIC THAT IS MADE EASIER BY EXPRESS- THIS LOGIC USED FOR LESSON*/

//Import http module
const http = require('http');
const fs = require("fs");

//Create server-Request listener anonymous function executes for every incoming request
const server = http.createServer((req, res) => {
const url = req.url;
const method = req.method;
    
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFile("message.text", message, err => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    };
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
});


//Listen for requests - takes arguments for ports, hostnames, etc but dev no host name defaults to localhost (this machine). Test in browser by navigating to localhost:3000
server.listen(3000);



/*Final Code
================================================
const http = require('http');
const server = http.createServer((req, res) => {
    
});
server.listen(3000);
================================================
*/