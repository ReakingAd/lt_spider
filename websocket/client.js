const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080',{
    perMessageDeflate:false
});

ws.on('open',() => {
    console.log('in open');
    ws.send('something');
});

ws.on('message',(data,flags) => {
    console.log( data );
});

ws.on('ping',(data,flags) => {
    console.log('in ping');
    console.log( data );
    console.log( flags );
});

ws.on('pong',(data,flags) => {
    console.log('in pong');
    console.log( data );
    console.log( flags );
});

ws.on('unexpected-response',(req,res) => {
    console.log('in unexpected-response');
})

ws.on('error', err => {
    console.log('in error handler');
    console.log(err);
})