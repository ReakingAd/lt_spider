const http = require('http');

let app = http.createServer( (req,res) => {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end('hello world');
});
app.listen(1234);