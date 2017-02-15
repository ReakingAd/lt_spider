const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port:8080
});

wss.on('connection',ws => {
    ws.on('message',message => {
        console.log('received:%s',message);
        ws.send('You just send: ' + message);

        ws.on('error',err => {
            console.log('in error handler');
            console.log(err);
        });
    });
    let i = 0;
    let timer = setInterval(function(){
        // ws.send('data every 2s from server');
        ws.send(i);
        i++;
    },2000);
    // ws.send('adfadfadfadfasdf');
    ws.on('close', reason => {
        console.log('in close');
        clearInterval(timer);
        console.log( reason );
    })
});
