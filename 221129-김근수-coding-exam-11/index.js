// data

// head
{
  /* <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title> */
}

// main
{
  /* <div id="root">hello</div> */
}

// header
{
  /* <ul><li>메뉴</li></ul> */
}

// footer
{
  /* <footer>kdt 클래스</footer> */
}
const http = require("http");
const path = require("path");
const fs = require("fs");

const head = fs.readFileSync("./head.txt");
const body = fs.readFileSync("./body.txt");
const header = fs.readFileSync("./header.txt");
const main = fs.readFileSync("./main.txt");
const footer = fs.readFileSync("./footer.txt");
/* const fsArray = [head, header, body, main, footer];
console.log(fsArray); */

fs.writeFileSync(
  "index.html",
  head + header + main + body + footer,
  (encodeURI = "utf8")
);
fs.writeFileSync("about-me.html", head + footer, (encodeURI = "utf8"));
fs.writeFileSync("write.html", head + main, (encodeURI = "utf8"));
fs.writeFileSync("waiter.html", head + header, (encodeURI = "utf8"));

const app = http.createServer((req, res) => {
  let url = req.url;
  if ((req.method === "GET", "POST")) {
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      let data = fs.readFileSync("./index.html");
      res.write(data);
      res.end();
    }
    if (url === "/about-me") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      let data = fs.readFileSync("./name.html");
      res.write(data);
      res.end();
    }
    if (url === "/write") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      let data = fs.readFileSync("./write.html");
      res.write(data);
      res.end();
    }
    if (url === "/waiter") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      let data = fs.readFileSync("./waiter.html");
      res.write(data);
      res.end();
    }
  }
});
app.listen(4000, () => {
  console.log("서버 오픈");
});

/* const app = http.createServer((req, res) => {
  let _url = req.url;
  let getData = url.parse(_url, true).query;
  let title = getData.id;
  if (_url === "/") {
    title = "hello";
  }
  if (url === "/favicon.ico") {
    res.writeHead(404);
    res.end();
    return;
  }
  res.writeHead(200);
});
console.log(app); */
// });

// const root = document.createElement("div");
// root.innerHTML = "hello";
// root.setAttribute("id", "root");
// console.log(root);
