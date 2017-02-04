const request = require('request');
const co      = require('co');
const iconv   = require('iconv-lite');

let getMainPageHtml = () => {
	return new Promise( (resolve,reject) => {
		let options = {
			url:'http://www.37zw.com/0/330/',
			method:'get',
			timeout:2000,
			encoding:null,
			proxy:'http://proxy.cmcc:8080'
		}

		request(options,(err,res,body) => {
			if(err) return console.log( err );
			let result = iconv.decode(body,'gbk');
			resolve( result );
		});
	});
}

let parseChapterUrls = html => {
	if( !html ) return console.log('缺少主页html代码');
	let rBookName     = /(?:id="info"[\s\S]*?<h1>)(.*?)(?:<[\s\S]*?者：)(.*?)(?:<)/g;
	let result        = rBookName.exec(html);
	let bookName      = result[1];
	let author        = result[2]
	
	let urlsArr       = [];
	let rChapterTitle = /(?:<dd[\s\S]*?href=")(.*?)(?:">)(.*?)(?:<\/a>)/g;
	let chapterResult;

	while( chapterResult = rChapterTitle.exec(html) ){
		let urls = {
			title:chapterResult[2],
			url:chapterResult[1]
		}
		urlsArr.push(urls);
	}
	return urlsArr;
}

let getChapterHtml = urlsArr => {
	let baseUrl = 'http://www.37zw.com/0/330/';
	let promises = urlsArr.map( (item,index) => {
		let url = baseUrl + item.url;

		return new Promise( (resolve,reject) => {
			let options = {
				url:url,
				method:'get',
				encoding:null,
				proxy:'http://proxy.cmcc:8080'
			}
			request(options,(err,res,body) => {
				if(err) return console.log( err )
				body = iconv.decode(body,'gbk');
				resolve(body);
			})
		});
	});

	return Promise.all( promises );
}

co(function* (){
	let mainPageHtml = yield getMainPageHtml();
	let urlsArr = parseChapterUrls(mainPageHtml);
	urlsArr = urlsArr.slice(0,2);
	let kk = yield getChapterHtml(urlsArr);
	console.log(kk.length)
	console.log('ddddddddddddone');
	// console.log( urlsArr );
}).catch( err => {
	if(err){
		console.log( 'err in co:: ' + err );
	}
});