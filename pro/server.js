const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  console.log("Request is made");
  res.setHeader("Content-Type", "text/html");

  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-blah":
      res.statusCode = 301; // Indicating redirection.
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 4000...");
});
