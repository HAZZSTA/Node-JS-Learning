const http = require("http"); //constant to import http module

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("html");
    res.write("<head><title>Assignement 1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></input></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("html");
    res.write("<head><title>Assignement 1</title></head>");
    res.write(
      '<body><ul><li>User 1</li><li>User 2</li></ul></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
})

server.listen(3000);