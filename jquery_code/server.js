const http = require('http');

http.createServer( (req,res) => {
    // res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
    res.writeHead(200);
    res.end('kkk');
}).listen(1999);