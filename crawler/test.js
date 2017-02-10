const Crawler = require('./crawler');
const fs = require('fs');

let c = new Crawler({
    parallel:2,
    defer:1000,
    // proxy:'http://proxy.cmcc:8080',
    log:true,
    forceUTF8:true,
    callback:function(err,res,body,url){
    },
    done:function(){}
});
let urlsArr = [
    'http://www.qq.com',
    'http://www.baidu.com',
    'http://www.reakingad.com',
    'http://www.37zw.com/0/330/'
];

c.init(urlsArr);

