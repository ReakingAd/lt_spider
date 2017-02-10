**爬虫简介**

接收一个url数组，可控制并发数和请求时间间隔，遍历请求数组中的url

- 支持设置并发数、请求间隔。
- 可自动识别字符集，输出utf-8格式，避免结果乱码。（目前测试过gbk、gb2312、utf8）
- 可选择性输出日志文件和控制台信息

**使用示例**

    node crawler/test.js

**示例test.js代码**

    const Crawler = require('./crawler');

    let c = new Crawler({
        parallel:2,
        defer:1000,
        // proxy:'http://proxy.cmcc:8080',
        log:true,
        timeout:3000,
        forceUTF8:true,
        callback:function(err,res,body,url){
            console.log(url + ' :: ' + body.length / 1000 + 'kb');
        },
        done:function(){}
    });
    let urlsArr = [
        'http://www111.qq.com',
        'http://www.baidu.com',
        'http://www.reakingad.com',
        'http://www.37zw.com/0/330/'
    ];

    c.init(urlsArr);

**可选参数**

    parallel    {Number}     并发数 。默认 10
    defer       {Number}     请求间隔 ms。默认 0ms
    forceUTF8   {boolean}    是否自动判断网页的字符集，并转为utf-8格式输出。默认为true。如果需要buffer，则forceUTF8设为false,并且encoding=null
    verbose     {boolean}    控制台输出详细信息。默认false
    log         {boolean}    是否输出错误到日志文件 log/crawler.log。默认false 
    callback    {Function}   每个请求完成的回调。可在这里对爬取的内容进行处理
    done        {Function}   给爬虫指派的所有任务完毕后的回调函数。

支持所有request模块支持的属性 [request参数详情](https://www.npmjs.com/package/request)
