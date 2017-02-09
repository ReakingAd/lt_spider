const request = require('request');
const zlib = require('zlib');
let options = {
    url:'http://d1.weather.com.cn/sk_2d/101010100.html',
    method:'get',
    // encoding:null, // 规定request模块不对返回数据进行解码。后面我们用zlib解码
    gzip:true,
    proxy:'http://proxy.cmcc:8080',
    headers:{
        'Accept-Encoding':'gzip, deflate, sdch',
        'Referer':'http://e.weather.com.cn/d/air/101010100.shtml',
    }
}
request(options,(err,res,body) => {
    if(err) return console.log('err:: ' + err);
    console.log(body); // 原始buffer数据
    // zlib.unzip(body,(err,buffer) => {
    //     if(!err){
    //         console.log(buffer.toString()); // 解压后的数据
    //     }
    //     else{
    //         console.log(err)
    //     }
    // })
})