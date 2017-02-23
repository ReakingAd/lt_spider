const Crawler = require('./crawler');
const fs = require('fs');
const request = require('request');

let c = new Crawler({
    parallel:2,
    defer:1000,
    proxy:'http://proxy.cmcc:8080',
    log:true,
    timeout:3000,
    // forceUTF8:true,
    encoding:null,
    callback:function(err,res,body,url){
        let filename = url.split('fabric_thick/')[1];
        fs.writeFileSync(filename,body.encode());
    },
    done:function(){}
});
let urlsArr = [
    'http://dev.3jke.cn/image/cache/catalog/xiangqingtu/fabric_thick/27-100x100.jpg'
];

// c.init(urlsArr);

let url = 'http://dev.3jke.cn/image/cache/catalog/款式图/lingzi/5290+5AL1-100x100.jpg';
url = encodeURI(url);
let result = url.split('/');
let filename = result[result.length - 1];

let options = {
    url:url,
    method:'get',
    proxy:'http://proxy.cmcc:8080'
}
let _img = request(options,(err,res,body) => {
    console.log(typeof body)
});

_img.pipe(
    fs.createWriteStream('../pubsub/other_img/' + filename).on('finish',err => {
        console.log( err );
    })
)
