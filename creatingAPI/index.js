const http = require("http");
const fs = require("fs");

console.log(`${__dirname} / userApi.json`);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/userapi") {
    fs.readFile(`${__dirname}/userApi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(400);
    res.end("<h1>Oops wrong Page Input</h1>");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to Port:5000");
});
