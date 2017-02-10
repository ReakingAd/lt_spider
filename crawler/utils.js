const fs    = require('fs');
const iconv = require('iconv-lite');
/*
@param  {Array}
@return  {boolean} 
@desc  检测数组中是否还有元素。
*/
module.exports.isEmptyArr = function(arr){
    if( !(arr instanceof Array) ){
        console.log('not a array');
        throw Error('not a array');
    }
    else if(arr.length === 0){
        return true;
    }
    return false;
}

/*
@param  {String} msg 需要输出的信息
@param  {Function} callback  输出完日志后的回调
@desc  自动添加时间信息,并输出日志。
*/
module.exports.errorLog = function(msg,callback){
    let timeInfo = ( new Date() ).toString();

    fs.appendFile('log/crawler.log','\r\n' + timeInfo + ' ' + msg,callback);
}

/*
@param {Buffer} request模块返回的res
@return {String} charset  res所采用的字符集。
@desc  对request的响应response进行检测，获得其所采用的字符集并返回。检测过程分三步：
    1.查响应头字段 Content-Type。如果字段中没有charset设置，则进行第二步
    2.先用utf-8解码res.body。再正则匹配<meta>标签中的charset属性
    3.如果仍然没有获取字符集，则使用默认值utf-8
*/
module.exports.getCharset = function(res){
    let content_type = res.headers['content-type'];
    let charset          = 'utf8';
    // 响应头中有charset字符集，则使用该字符集
    if( content_type.indexOf('charset') > -1 ){
        let content_charset  = content_type.split('charset=')[1].toLowerCase();

        if( content_charset.indexOf('gb') > -1){
            charset = 'gbk';
        }
        else if( content_charset.indexOf('utf') > -1 ){
            charset = 'utf8';
        }
    }
    // 响应头中为声明字符集，先用utf8解码，然后去<meta>标签中查找字符集。再重新解码
    else{
        let _body = res.body;
        _body = iconv.decode(_body,'utf8');
        let rCharset = /(?:<meta.*?content=.*?(?:charset=)(.*?)".*?>)/g;
        let result = rCharset.exec(_body);
        if( result ){
            charset = result[1];
        }
    }
    return charset;
}