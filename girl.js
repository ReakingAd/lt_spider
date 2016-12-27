const co = require('co');
const request = require('request').defaults({proxy:'http://proxy.cmcc:8080'});
const fs = require('fs');
const path = require('path');

let createUrlArr = (begin,end) => {
	console.log('生成url..');
	return new Promise( (resolve,reject) => {
		const baseUrl = 'http://jandan.net/ooxx/page-';
		let urlArr = [];

		for( let i=begin;i<=end;i++ ){
			urlArr.push( baseUrl + i );
		}
		console.log('生成url完毕');
		resolve(urlArr);
	});
};

let getHtmlByUrl = urlArr => {
	console.log('下载html..');
	let promises = urlArr.map( (item,index) => {
		return new Promise( (resolve,reject) => {
			request.get(item,(err,res,body) => {
				if(err) reject(err);
				if(res.statusCode === 200){
					resolve(body);
				}
			});
		});
	});
	console.log('下载html完毕');
	return promises;
};

let parsePicUrl = htmlArr => {
	console.log('解析pic url..');
	return new Promise( (resolve,reject) => {
		let urlArr = [];
		htmlArr.forEach( (item,index) => {
			let rUrl = /(?:view_img_link[\s\S]*?src=")(.*?)(?:")/g;			
			let result;

			while( (result = rUrl.exec(item) ) != null ){
				urlArr.push(result[1]);
				console.log('解析url完毕' + index);
			}
			resolve(urlArr);
		});
	});
};

let downloadPic = picUrlArr => {
	console.log('开始下载图片..');
	let promises = picUrlArr.map( (item,index) => {
		let url = 'http:' + item;
		return new Promise( (resolve,reject) => {
			let picName = path.basename(url);
			request(url).pipe( 
				fs.createWriteStream('images/' + picName).on('finish',err => {
					if(err) reject(err);
					console.log('下载图片' + index + '完毕');
					resolve();
				})
			);
		});
	});
	return promises;
}

function getPictures(begin,end){
	return new Promise( (resolve,reject) => {
		co(function* (){
			let urlArr = yield createUrlArr(begin,end);
			let htmlArr = yield getHtmlByUrl(urlArr);
			let picUrlArr = yield parsePicUrl(htmlArr);
			yield downloadPic(picUrlArr);
			// console.log( 'done' );
			resolve();
		});
	});
}

function getAllPics(num){
	co(function* (){
		let k = Math.floor( num/50 );
		let i = 1;
		while( i <= k ){
			yield getPictures( (i-1)*50+1,(i-1)*50+50 );
			console.log('===================');
			i++;
			if(i>k){
				console.log('innnnnnnnnnn');
				yield getPictures( (i-1)*50+1,num )
			}
		}
		console.log('done');
	}).catch( err => {
		console.log('捕获错误： ' + err);
	})
}

getAllPics(1000)