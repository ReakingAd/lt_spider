const Crawler = require('./crawler');

let c = new Crawler({
    parallel:10,
    defer:1000,
    proxy:'http://proxy.cmcc:8080',
    log:true,
    forceUTF8:true,
     headers:{
        cookie:'s=6z1c94wlnh; xq_a_token=280dee5696661da23161c033e7ce7facef8af94d; xq_r_token=184a2c0e20d72c3b3f23c2a1587bae0798adf96d; u=711487830077313; __utmt=1; __utma=1.1009926974.1487830131.1487830131.1487830131.1; __utmb=1.1.10.1487830131; __utmc=1; __utmz=1.1487830131.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); Hm_lvt_1db88642e346389874251b5a1eded6e3=1487830131; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1487830474'
    },
    // encoding:null,
    callback:function(err,res,body){
        console.log( res.body )
    },
    done:function(){}
});

let urlsArr = ['https://xueqiu.com/stock/cata/stocklist.json?page=1&size=50&order=desc&orderby=name&type=0%2C1%2C2%2C3&_=1487832684974'];
c.init(urlsArr);