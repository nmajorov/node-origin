var http = require('http');
var port = 8080;

var handleRequest = function(request, response) {
  var date = new Date();
  console.log("get request: " + date.toLocaleString());
  response.writeHead(200);
  var date = new Date();
  response.end("Hello from RedHat Zuerich:  " + date.toLocaleString());
}

console.log("start server on port: " + port);
var www = http.createServer(handleRequest);
www.listen(port);

