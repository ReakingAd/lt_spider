const http = require('http');
const crypto = require('crypto');
// const WebSocket = require('ws');

let app = http.createServer( (req,res) => {
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('hello world');
}).listen(8080);

app.on('request',(err,data) => {
    console.log('in request event');
    console.log( Object.keys(data) )
})

// app.on('upgrade',(req,socket,upgradeHead) => {
//     console.log('in upgrade');
//     let secKey = req.headers['sec-websocket-key'];
//     console.log( secKey );
//     let val = crypto.createHash('sha1').update(secKey).digest('base64'); // 这里的secKey可能需要在拼接一个字符串
//     console.log(val);
//     app.writeHead
// });

/*
req HTTP 请求的参数，与 'request' 事件的相同
socket 服务器与客户端之间的网络 socket
head 升级流的第一个数据包（可能为空）
*/
// app.on('upgrade',(req,socket,upgradeHead) => {
//     console.log('in upgrade');
//     console.log( Object.keys(req) );
// })

app.on('upgrade',(req,socket,upgradeHead) => {
    console.log('in upgrade');
    // let head = new Buffer(upgradeHead.length);
    // upgradeHead.copy(head);
    let key = req.headers['sec-websocket-key'];
    let shasum = crypto.createHash('sha1');
    key = shasum.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');

    let protocol = 'http'; // added by Litao
    let headers = [
        'HTTP/1.1 101 Switching Protols',
        'Upgrade:websocket',
        'Connection:Upgrade',
        'Sec-Websocket-Accept: ' + key
        // 'Sec-Websocket-Protocol: ' + protocol
    ];
    socket.setNoDelay(true);
    socket.write( headers.concat('','').join('\r\n') );

    // let msg = '';
    // socket.on('data',data => {
    //     console.log('in data');
    //     console.log(data.toString())
    //     msg += data;
    // });
    // req.on('end',(data) => {
    //     console.log('in end');
    //     console.log( data );
    // })
    console.log( Object.keys(req) );
    console.log( Object.keys(socket) );
    req.onmessage = function(event){
        console.log('in onmessage');
        console.log( event.data );
    }
});