import http from "http";
import fs from "fs";
import ejs from "ejs";

const server = http.createServer();

server.on("request", (req, res) => {
  if(req.url.endsWith(".css")) {
    const cssFile = fs.readFileSync("./style.css", "utf8");
    res.writeHead(200, {
      'Content-Type': 'text/css; charset=utf-8'
    })
    res.write(cssFile);
    res.end();

    return;
  }

  const f = fs.readFileSync("./index.ejs", "utf8");

  const template = ejs.render(f, {
    title: "ejs"
  });

  res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
  })
  res.write(template);
  res.end();
});

server.listen(9000);
