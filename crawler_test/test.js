const request = require('request');

let options = {
    url:'http://jandan.net/ooxx/page-1',
    method:'get'
}
request(options,(err,res,body) => {
    if(err) return console.log(err);
    console.log(res.headers)
});