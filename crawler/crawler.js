/*
@name Crawler
@author reakingad
@desc   爬虫爬取指定数组中的url地址。
        1. 支持设置并发数、请求间隔。
        2. 可自动识别字符集，输出utf-8格式，避免结果乱码。（目前测试过utf8、gbk、gb2312、BIG-5）
        3. 可选择性输出日志文件和控制台信息
@require  lt_utils.js  request
@param    {Number} parallel  并发数 。默认 10
@param    {Number} defer  请求间隔 ms。默认 0ms
@param    {Function} callback  每个请求完成的回调。可在这里对爬取的内容进行处理
@param    {Function} done   给爬虫指派的所有任务完毕后的回调函数。
@param    {boolean} log  是否输出错误日志文件 crawler.log。默认false 
@param    {boolean} forceUTF8  是否自动判断网页的字符集，并转为utf-8格式输出。默认为true。如果需要buffer，则不要forceUTF8,并且encoding=null
@param    {boolean} verbose 控制台输出详细信息。默认false
@param    可使用其他request模块支持的属性
@usage    
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

c.init(urlsArr);
*/

'use strict';

const request = require('request');
const lt_utils   = require('./lt_utils');
const iconv   = require('iconv-lite');
const fs      = require('fs');

class Crawler{
    constructor(options){
        ( {
             defer    : this.defer     = 0,          
             parallel : this.parallel  = 10,
             callback : this.callback  = function(){},
             done     : this.done      = function(){},
             log      : this.log       = false,
             forceUTF8: this.forceUTF8 = true,
             verbose  : this.verbose   = false
        } = options )

        delete options.defer;
        delete options.parallel;
        delete options.callback;
        delete options.done;
        delete options.log;

        if(this.forceUTF8){
            options.encoding = null
        }

        this.reqOptions   = options;
        this.wait_urlsArr = [];
        this.done_urlsArr = [];
        this.err_urlsArr  = [];
    }
    // 初始化爬虫
    init(urlsArr){
        this.checkParams();
        this.total = urlsArr.length;
        console.log('********** start crawler, total ' + this.total + ',parallel ' + this.parallel + ',defer ' + this.defer + 'ms **********')
        this.createLogDir().then( () => {
            this.wait_urlsArr = urlsArr;
            this.loop();
        })
    }
    // 穿件日志文件夹
    createLogDir(){
        return new Promise( (resolve,reject) => {
            if( this.log ){
                fs.stat('log',err => {
                    if(err) {
                        fs.mkdirSync('log');
                    }
                    resolve();
                });
            }
            else{
                resolve();
            }
        });
    }
    // 检查几个爬虫参数师傅符合要求
    checkParams(){
        this.parallel = parseInt( this.parallel );
        if( isNaN(this.parallel) ){
            throw Error('Wrong param parallel,please check it again.');
        }
        else if( this.parallel <= 0 ){
            throw Error('Wrong param parallel,whick should be greater than 0.');
        }

        this.defer = parseInt( this.defer );
        if( isNaN(this.defer) ){
            throw Error('Wrong param defer,please check it again.');
        }
        this.defer = this.defer < 0 ? 0 : this.defer;
    }
    // 每次调用loop函数都会，会发起指定数量的一组并发
    loop(){
        let on_UrlsArr    = this.wait_urlsArr.splice(0,this.parallel);
        let pReqsParallel = this.initReqsParallel(on_UrlsArr);
        // 一次并发后，如果等待数组中还有未发起的请求，则继续loop。如果等待数组已经为空，则调用done()方法
        pReqsParallel.then( result => {
            this.done_urlsArr = this.done_urlsArr.concat(on_UrlsArr);
            if( !lt_utils.isEmptyArr(this.wait_urlsArr) ){
                this.setDefer( this.loop ); 
            }
            else{
                this.loopDone();
            }
        },err => {
            this.shellLog('in start err :  ' + err);
        }).catch(err => {
            if(err) console.log(err)
        })
    }
    // 设置并发组与并发组之间的时间间隔
    setDefer(callback){
        this.shellLog('start defer ...');
        setTimeout( () => {
            this.shellLog( this.defer + ' ms passed.');
            callback.bind(this)(); // 直接调用callback函数，导致callback内部的this指向undefined。所有需要手动bind一下。
        },this.defer);
    }
    // 接受一个url数组，发起并发请求
    initReqsParallel(urlsArr){
        let promises = urlsArr.map(  (item,index) => {
            return this.sendReq(item);
        });
        let pReqsParallel = Promise.all(promises);

        return pReqsParallel;
    }
    // 指定url发送单次请求
    sendReq(url){
        return new Promise( (resolve,reject) => {
            let options = Object.assign({},this.reqOptions,{url});
            
            this.shellLog('>>> send request to ' + url + ' ...')
            request(options,(err,res,body) => {
                // 请求出错
                if(err){
                    this.shellLog('err in request: ' + err);
                    this.err_urlsArr.push(options.url);
                    if( this.log ){
                        lt_utils.errorLog(options.url + ' ' + err,() => {
                            resolve();
                        });
                    }
                    else{
                        resolve();
                    }
                }
                // 请求成功
                else{
                    if( this.forceUTF8 ){
                        let charset = lt_utils.getCharset(res);
                        body = res.body = iconv.decode(body,charset);
                    }
                    this.shellLog( url + ' <<< ' + ' done');
                    this.callback(err,res,body,url);
                    resolve();
                }
            });
        });
    }
    // 所有请求都结束后，打印结束信息
    loopDone(){
        this.done();
        console.log('********** work done here **********');
        let _total   = this.total;
        let _err     = this.err_urlsArr.length;
        let _success = this.total - _err;

        console.log('total ' + _total + ',' + 'success ' + _success + ', ' + 'failed ' + _err);
    }
    // 替代console.log 。当配置了verbose:true时，控制台输出信息
    shellLog(msg){
        if( this.verbose ){
            console.log(msg);
        }
    }
    done(){
    }
}

module.exports = Crawler;