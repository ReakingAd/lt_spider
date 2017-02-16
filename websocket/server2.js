const http = require('http');

http.createServer( (req,res) => {
    let ip = req.connection.remoteAddress;

    console.log( ip );
    // console.log( Object.keys(req.connection) )
    res.writeHead(200);
    res.end('hello: ' + ip);
}).listen(8080);