const request = require('request');
const fs = require('fs');

class Crawler{
    constructor(options){
        ({
            maxConnections:this.maxConnections = 10,
            defer:this.defer = 0,
            proxy:this.proxy,
            callback:this.callback
        } = options)

        this.wait_urlsArr = [];
        this.done_urlsArr = [];
    }
    queue(urlsArr){
        this.wait_urlsArr = urlsArr;
        this.start();
    }
    isEmptyArr(arr){
        // return new Promise( (resolve,reject) => {
            if(arr.length === 0){
                return true;
            }
            return false;
        // });
    }
    start(){
        let reqNum = this.maxConnections;

        while( !this.isEmptyArr(this.wait_urlsArr) ){
            console.log('in looppppppppppppppppppp');
            let on_UrlsArr = this.wait_urlsArr.splice(0,reqNum);
            let pLoopResult = this.reqLoop(on_UrlsArr);
            // 
            pLoopResult.then( result => {
                this.done_urlsArr = this.done_urlsArr.concat(on_UrlsArr);
                console.log(result)
                console.log(this.done_urlsArr)
            },err => {
                console.log(err)
            }).catch(err => {
                if(err) console.log(err)
            })
        }
    }
    // 遍历一个数组，对每个元素url发送请求。获取promise
    reqLoop(urlsArr){
        let promises = urlsArr.map(  (item,index) => {
            return this.sendReq(item);
        });
        let pLoopResult = Promise.all(promises);

        return pLoopResult;
    }
    sendReq(url){
        return new Promise( (resolve,reject) => {
            let options = {
                proxy:this.proxy,
                url:url,
                method:'get'
            }
            request(options,(err,res,body) => {
                if(err){
                    console.log('err in request: ' + err);
                    reject(err);
                };
                if(res.statusCode === 200){
                    resolve(res.headers);
                }
            });
        });
    }
    log(msg){

    }
}

let c = new Crawler({
    maxConnections:2,
    defer:2000,
    proxy:'http://proxy.cmcc:8080',
    callback:function(err,res,body){
        if(err) return console.log('in callback :  ' + err);
        console.log( res.headers )
        console.log('done');
    }
});

let urlsArr = [
    'http://jandan.net/ooxx/page-1',
    'http://jandan.net/ooxx/page-2',
    'http://jandan.net/ooxx/page-3',
]
c.queue(urlsArr)

