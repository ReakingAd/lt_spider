const Crawler = require('../crawler/crawler');
const fs = require('fs');

let getFilename = url => {
    let _arr = url.split('/');
    let filename = _arr[ _arr.length - 1];
    return filename;
}

let c = new Crawler({
    parallel:10,
    defer:1000,
    log:true,
    body:'ReadStream',
    // forceUTF8:true,
    encoding:null,
    callback:function(err,res,body,url){
        // console.log( res.body )
        let filename = getFilename(url);
        let write = fs.createWriteStream('other_img/' + filename);
        body.pipe(write);
    },
    done:function(){}
});

let urlsArr = [
    'http://dev.3jke.cn/image/cache/catalog/%E6%AC%BE%E5%BC%8F%E5%9B%BE/lingzi/5AL4-100x100.jpg',
];


// c.init(urlsArr);
let url = 'http://dev.3jke.cn/image/cache/catalog/款式图/lingzi/5I02-100x100.jpg';
url = encodeURI(url);
const request = require('request');
request.get(url,(err,res,body) => {
}).pipe(
    fs.createWriteStream('./other_img/' + getFilename(url))
)