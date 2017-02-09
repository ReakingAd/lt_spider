'use strict';

const request = require('request');
const fs = require('fs');

class Crawler{
    constructor(options){
        ({
            maxConnections:this.maxConnections = 10,
            defer:this.defer = 0,
            proxy:this.proxy,
            timeout:this.timeout = 5000,
            callback:this.callback
        } = options)

        this.wait_urlsArr = [];
        this.done_urlsArr = [];
        this.err_urlsArr  = [];
    }
    queue(urlsArr){
        this.wait_urlsArr = urlsArr;
        this.loop();
    }
    isEmptyArr(arr){
        if( !(arr instanceof Array) ){
            console.log('not a array');
            throw Error('not a array');
        }
        else if(arr.length === 0){
            return true;
        }
        return false;
    }
    setDefer(callback){
        if( this.defer && this.defer > 0 ){
            console.log('start gap 0 ...');
            setTimeout( () => {
                console.log( this.defer + ' ms passed.');
                callback.bind(this)(); // 直接调用callback函数，导致callback内部的this指向undefined。所有需要手动bind一下。
            },this.defer);
        }
    }
    loop(){
        let on_UrlsArr = this.wait_urlsArr.splice(0,this.maxConnections);
        let pReqsParallel = this.initReqsParallel(on_UrlsArr);
        // 一次并发后，如果等待数组中还有未发起的请求，则继续loop。如果等待数组已经为空，则调用done()方法
        pReqsParallel.then( result => {
            this.done_urlsArr = this.done_urlsArr.concat(on_UrlsArr);
            
            if( !this.isEmptyArr(this.wait_urlsArr) ){
                this.setDefer( this.loop ); 
            }
            else{
                this.done();
            }
        },err => {
            console.log('in start err :  ' + err)
        }).catch(err => {
            if(err) console.log(err)
        })
    }
    // 接受一个url数组，发起并发请求
    initReqsParallel(urlsArr){
        let promises = urlsArr.map(  (item,index) => {
            return this.sendReq(item);
        });
        let pReqsParallel = Promise.all(promises);

        return pReqsParallel;
    }
    sendReq(url){
        return new Promise( (resolve,reject) => {
            let options = {
                proxy:this.proxy,
                url:url,
                timeout:this.timeout,
                method:'get'
            }
            console.log('>>> send request to ' + url + ' ...')
            request(options,(err,res,body) => {
                if(err){
                    console.log('err in request: ' + err);
                    this.err_urlsArr.push(options.url);
                    this.log(err,() => {
                        resolve();
                    });
                }
                else if(res.statusCode === 200){
                    console.log( url + ' <<< ' + ' done');
                    this.callback(err,res,body);
                    resolve(res.headers);
                }
            });
        });
    }
    log(msg,callback){
        let timeInfo = ( new Date() ).toString();

        fs.appendFile('crawler.log','\r\n' + timeInfo + ' ' + msg,callback);
    }
    done(){
        console.log('********** work done here **********');
        console.log(this.err_urlsArr);
    }
}

let c = new Crawler({
    maxConnections:4,
    defer:2000,
    // proxy:'http://proxy.cmcc:8080',
    callback:function(err,res,body){
        if(err) return console.log('in callback :  ' + err);
        // console.log('====================== in callback ===================');
    }
});

let urlsArr = [
    'http://jandan1.net/ooxx/page-1',
    'http://jandan.net/ooxx/page-2',
    'http://jandan.net/ooxx/page-3',
    'http://jandan3.net/ooxx/page-4',
    'http://jandan.net/ooxx/page-5',
    'http://jandan.net/ooxx/page-6',
    'http://jandan.net/ooxx/page-7',
    'http://jandan.net/ooxx/page-8',
    'http://jandan.net/ooxx/page-9',
    'http://jandan.net/ooxx/page-10'
];

// let urlsArr = [
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
//     'http://www.reakingad.com',
// ]
c.queue(urlsArr)

