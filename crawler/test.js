const Crawler = require('./crawler');

let c = new Crawler({
    parallel:2,
    defer:1000,
    proxy:'http://proxy.cmcc:8080',
    log:true,
    timeout:3000,
    forceUTF8:true,
    callback:function(err,res,body,url){
        console.log(url + ' :: ' + body.length / 1000 + 'kb');
    },
    done:function(){}
});
let urlsArr = [
    'http://www111.qq.com',
    'http://www.baidu.com',
    'http://www.reakingad.com',
    'http://www.37zw.com/0/330/',
    'http://www.people.com.cn/BIG5/'
];

c.init(urlsArr);

