const request = require('request');
const co      = require('co');
const fs      = require('fs');
const url     = 'http://www.admin5.com/browse/19/list_1.shtml';

// 获取列表页的html代码
let getHtmlByUrl = url => {
	return new Promise( (resolve,reject) => {
		request.get(url,(err,res,body) => {
			if(err) return reject(err);
			resolve(body);
		});
	});
};

// 解析html，获取当前页内所有文章的title和url
let parseUrls = html => {
	return new Promise( (resolve,reject) => {
		const rData = /(?:channel_title_t[\s\S]*?href=")(.*?)(?:"[\s\S]*?>)(.*?)(?:<\/a>)/g;
		let urlArr = [];
		let result;

		while( ( result = rData.exec(html) ) !== null ){
			let url = result[1];
			let title = result[2];

			urlArr.push({
				title:title,
				url:url
			});
		}
		resolve(urlArr);
	});
};

// 保存url
let saveUrls = urlArr => {
	return new Promise( (resolve,reject) => {
		fs.writeFile('url.txt',JSON.stringify(urlArr),err => {
			if(err) return reject(err);
			resolve();
		});
	});
};

// 根据url数组，获取每一篇文章的html代码
let getArticles = urlArr => {
	let promises = urlArr.map( item => {
		return new Promise( (resolve,reject) => {
			let url = item.url;
			request.get(url,(err,res,body) => {
				if(err) reject(err);
				// resolve(body);
				resolve({
					url:url,
					body:body	
				});
			});
		});
	});
	return promises;
};

// 解析文章的标题和内容
let parseArtilces = htmlArr => {
	let promises = htmlArr.map( (item) => {
		return new Promise( (resolve,reject) => {
			let html = item.body;
			const rTitle = /(?:sherry_title[\s\S]*?h1>)(.*?)(?:<\/h1>)/g;
			const rContent = /(?:class="content".*?>)([\s\S]*?)(?:<\/div>[\s\S]*?<ul.*clearfix)/g;
			let title = rTitle.exec(html)[1].replace(/\?/g,'？');
			let content = rContent.exec(html)[1];
			resolve({
				url:item.url,
				title:title,
				content:content
			});
		});
	});
	// console.log( promises )
	return promises;
};

// 保存文章
let saveArticles = articleArr => {
	let promises = articleArr.map( item => {
		return new Promise( (resolve,reject) => {
			fs.writeFile('articles/' + item.title + '.txt',item.url + '\r\n' + item.content,err => {
				if(err) reject(err);
				resolve();
			});
		});
	});
	return promises;
};

co(function* (){
	let html       = yield getHtmlByUrl(url);
	let urlArr     = yield parseUrls(html);
	yield saveUrls(urlArr);
	let htmlArr    = yield getArticles(urlArr);
	let articleArr = yield parseArtilces(htmlArr);
	yield saveArticles(articleArr);
	console.log('done');
}).catch( err => {
	console.log( err );
});