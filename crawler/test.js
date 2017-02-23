const Crawler = require('./crawler');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://reakingad:Pass74123@localhost/es6',err => {
    if(err){
        console.log('connection err: ' + err);
    }
    else{
        console.log('connection DB successful..');
    }
});

let xueqiuSchema = mongoose.Schema({
    "symbol":String,
    "code":String,
    "name":String,
    "current":String,
    "percent":String,
    "change":String,
    "high":String,
    "low":String,
    "high52w":String,
    "low52w":String,
    "marketcapital":String,
    "amount":String,
    "type":String,
    "pettm":String,
    "volume":String,
    "hasexist":String
});
let xueqiuModel = mongoose.model('xueqiu',xueqiuSchema);
let fixData = json => {
    let _obj = JSON.parse( json );
    let dataArr = _obj.stocks;
    return dataArr;
}
let i = 1;
let saveDB = dataArr => {
    xueqiuModel.collection.insert(dataArr,(err,docs) => {
        if(err) return console.log( err );
        console.log(i++);
        console.log( 'save done. ' );
        // mongoose.disconnect();
    });
}

let c = new Crawler({
    parallel:10,
    defer:1000,
    // proxy:'http://proxy.cmcc:8080',
    log:true,
    forceUTF8:true,
     headers:{
        cookie:'s=6z1c94wlnh; xq_a_token=280dee5696661da23161c033e7ce7facef8af94d; xq_r_token=184a2c0e20d72c3b3f23c2a1587bae0798adf96d; u=711487830077313; __utmt=1; __utma=1.1009926974.1487830131.1487830131.1487830131.1; __utmb=1.1.10.1487830131; __utmc=1; __utmz=1.1487830131.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); Hm_lvt_1db88642e346389874251b5a1eded6e3=1487830131; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1487830474'
    },
    // encoding:null,
    callback:function(err,res,body){
        let dataArr = fixData( body );
        saveDB( dataArr );
    },
    done:function(){}
});

let urlsArr = [];
for(let i=1;i<=195;i++){
    let url = 'https://xueqiu.com/stock/cata/stocklist.json?page=' + i + '&size=50&order=desc&orderby=name&type=0%2C1%2C2%2C3&_=1487832684974';
    urlsArr.push(url)
}
c.init(urlsArr);

process.on('uncaughtException',err => {
    console.log('in uncaught: ' + err)
})