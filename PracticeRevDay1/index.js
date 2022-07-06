//CREATING SERVER
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Us Page");
  } else if (req.url === "/userapi") {
    fs.readFile(`${__dirname}/userApi.json`, "utf-8", async (err, data) => {
      await res.end(data);
      console.log(JSON.parse(data));
    });
  } else {
    res.end("<h1>Oops Wrong Input</h1>");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("Listening to port: 5000");
});
