const http = require('http');
const fs = require('fs');

http.createServer( (req,res) => {
    res.writeHead(200);
    fs.readFile('index.html', (err,data) => {
        res.end(data);
    });
}).listen(80);
