const request = require('request');
const iconv = require('iconv-lite')

let options = {
    url:'http://www.qq.com',
    method:'get',
    proxy:'http://proxy.cmcc:8080',
    encoding:null,
    gzip:true,
    headers:{
        'Accept-Encoding':'gzip, deflate, sdch',
    }
}
request(options,(err,res,body) => {
    if(err) return console.log(err);
    let result = iconv.decode(body,'gb2312');
    console.log(result)
});