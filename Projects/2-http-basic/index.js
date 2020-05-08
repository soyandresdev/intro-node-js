var http = require("http");
var queryString = require("querystring");
var url = require("url");
var { countries } = require("countries-list");

var server = http.createServer(function (req, resp) {
  const parse = url.parse(req.url);
  console.log(parse);
  const { pathname, query } = parse;
  const queyUrl = queryString.parse(query);
  console.log("pathname", pathname);
  console.log("queyUrl", queyUrl);
  if (pathname === "/") {
    resp.writeHead(200, { "Content-type": "text/html" });
    resp.write("<html><body><h1>Hola server</h1></body><html>");
    resp.end();
  } else if (pathname === "/country") {
    resp.writeHead(200, { "Content-type": "text/html" });
    if (queyUrl.code) {
      resp.write(JSON.stringify(countries[queyUrl.code]));
    } else {
      resp.write(JSON.stringify(countries));
    }
    resp.end();
  } else {
    resp.writeHead(404, { "Content-type": "text/html" });
    resp.write("<html><body><h1>Not Found</h1></body><html>");
    resp.end();
  }
});
server.listen(4000);
console.log("Server Listen: 4000");
