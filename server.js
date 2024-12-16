var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to GeeksforGeeks Node.js Tutorial');
}).listen(8080);

