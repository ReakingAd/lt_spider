const Crawler = require('./crawler/crawler');

let c = new Crawler({
    parallel:10,
    defer:1000,
    proxy:'http://proxy.cmcc:8080',
    log:true,
    forceUTF8:true,
    // encoding:null,
    callback:function(err,res,body){
        console.log( res.body )
    },
    done:function(){}
});

let urlsArr = [
	'http://www.reakingad.com'
];

c.init(urlsArr);