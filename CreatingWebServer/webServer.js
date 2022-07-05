const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("Wlcome to About Us page");
  } else {
    res.writeHead(404);
    res.end("Opps wrong format");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to 5000 port");
});
