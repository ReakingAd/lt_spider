const request = require('request').defaults({proxy:'http://proxy.cmcc:8080'});

let url = 'https://twitter.com/realDonaldTrump/status/840572799202783233?conversation_id=840572799202783233';
// let url = 'http://www.qq.com';

request.get(url,(err,res,body) => {
	if(err) return console.log( err );
	console.log( body );
});