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
        fs.writeFileSync("message.text" , "Dummy");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
    //This will quit the server - lesson purposes only
});

/*The old JS way to write this:
function rqListener(request, response) {

}

http.createServer(rqListener);

*/


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