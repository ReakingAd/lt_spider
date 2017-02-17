const http = require('http');

http.createServer( (req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('data from 90');
}).listen(90);


