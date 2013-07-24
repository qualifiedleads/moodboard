var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({status: 'Working', nextStep: 'Node Modules'});
  res.end();
}).listen(process.env.PORT || 9000);

