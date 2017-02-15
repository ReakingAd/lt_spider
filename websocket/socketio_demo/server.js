// const server = require('http').createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello');
// });
// const io = require('socket.io')(server);

// io.on('connection',client => {
//     client.on('event',data => {
//         console.log(data);
//     });
//     client.on('disconnect',() => {
//         console.log('in deisconnect');
//     })
// });

// server.listen(8080);

var io = require('socket.io')();
io.on('connection', function(client){});
io.listen(3000);