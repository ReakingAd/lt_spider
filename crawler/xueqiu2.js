const request = require('request');
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const co = require('co');

mongoose.connect('mongodb://reakingad:Pass74123@localhost/es6',err => {
    if(err){
        console.log('xxx');
    }
    else{
        console.log('yyy');
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

let sendRes = url => {
    return new Promise( (resolve,reject) => {
        let options = {
            url:url,
            method:'get',
            proxy:'http://proxy.cmcc:8080',
            headers:{
                cookie:'s=6z1c94wlnh; xq_a_token=280dee5696661da23161c033e7ce7facef8af94d; xq_r_token=184a2c0e20d72c3b3f23c2a1587bae0798adf96d; u=711487830077313; __utmt=1; __utma=1.1009926974.1487830131.1487830131.1487830131.1; __utmb=1.1.10.1487830131; __utmc=1; __utmz=1.1487830131.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); Hm_lvt_1db88642e346389874251b5a1eded6e3=1487830131; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1487830474'
            }
        }
        request(options,(err,res,body) => {
            // console.log( body );
            if(err){
                resolve('in request: ' + err);
            };
            let dataArr = JSON.parse( body ).stocks;
            resolve( dataArr );
        });
    })
}

let saveDB = dataArr => {
    return new Promise( (resolve,reject) => {
        xueqiuModel.collection.insert( dataArr,(err,docs) => {
            if(err){
                console.log( err );

            }
            else{
                resolve('done')
            }
        })
    })
}

let init = i => {
    if( i < 195 ){
        let url = 'https://xueqiu.com/stock/cata/stocklist.json?page=' + i + '&size=50&order=desc&orderby=name&type=0%2C1%2C2%2C3&_=1487832684974';
        return new Promise( (resolve,reject) => {
            sendRes(url).then( dataArr => {
                saveDB(dataArr).then( data => {
                    // console.log( data );
                    // resolve();
                    console.log(i);
                    i++;
                    init(i);
                });
            })
        })  
    }
    else{
        console.log('done');
    }
}
init(1)

// let arr = [];
// for( let i=1;i<=194;i++ ){
//     arr.push(i);
// }
// let urlArr = arr.map( item => {
//     return 'https://xueqiu.com/stock/cata/stocklist.json?page=' + item + '&size=50&order=desc&orderby=name&type=0%2C1%2C2%2C3&_=1487832684974';
// });

// let i = 0;
// init(urlArr[i]).then( () => {
//     i++;
//     if( i < 5 ){
//         console.log( i );
//         init(urlArr[i]);
//     }
//     else{
//         console.log( 'done' );
//     }
// });