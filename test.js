const http = require('http');

http.createServer( (req,res) => {
  console.log( req.url )
  res.writeHead(200);
  res.end('123');
}).listen(8888)