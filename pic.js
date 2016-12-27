const request = require('request').defaults({proxy:'http://proxy.cmcc:8080'});
const fs = require('fs');
const path = require('path');
const co = require('co');
const url = 'http://jandan.net/ooxx/page-1319';

let getHtmlByUrl = url => {
	return new Promise( (resolve,reject) => {
		request.get(url,(err,res,body) => {
			if(err) reject(err);
			if(res.statusCode === 200){
				resolve(body);
			}
		});
	});
};

let parsePic = html => {
	return new Promise( (resolve,reject) => {
		let picArr = [];
		const rUrl = /(?:view_img_link[\s\S]*?img.*?src=")(.*?)(?:")/g;
		let result;
		while( ( result = rUrl.exec(html) ) != null ){
			picArr.push(result[1])
		}
		resolve(picArr);
	});
};

let downPics = picArr => {
	let promises = picArr.map( (item,index) => {
		return new Promise( (resolve,reject) => {
			let url = 'http:' + item;
			let picName = path.basename(url);
			request(url).pipe(fs.createWriteStream('images/' + picName).on('finish',err => {
				if(err) reject(err);
				resolve();
			}));
		});
	});
	console.log(promises);
	return promises;
};

co(function* (){
	let html = yield getHtmlByUrl(url);
	let picArr = yield parsePic(html);
	yield downPics(picArr);
	console.log('done');
}).catch( err => {
	if(err) return console.log( err );
});