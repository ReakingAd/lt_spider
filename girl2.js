const request = require('request');
const co      = require('co');
const path    = require('path');
const fs      = require('fs');

class Girl{
	constructor(maxNum){
		this._baseUrl = 'http://jandan.net/ooxx/page-'; 
		this.pageNum = 1;
		this.url;
		this._pageListHtml;
		this.count = 0;
		this._maxNum = maxNum;
		this._folderCount = 0;
	}
	init(){
		console.log( 'downloading page ' + (this.pageNum) + ' ...');
		let _this = this;
		co(function* (){
			_this._pageListHtml = yield _this._getPageListHtml();
			let imgUrlsArr      = yield _this._parseImgUrls();
			yield _this._downloadImgs(imgUrlsArr);
			console.log( 'page ' + _this.pageNum + ' done');
			_this.pageNum++;
			if( _this.pageNum <= _this._maxNum ){
				_this.init();
			}
		}).catch( err => {
			if(err) return console.log( '捕获错误： ' + err );
		});
	}
	_getPageListUrl(){
		return this._baseUrl + this.pageNum;
	}
	_getPageListHtml(){
		this.url = this._getPageListUrl()
		return new Promise( (resolve,reject) => {
			request.get(this.url,(err,res,body) => {
				if(err) reject(err);
				if( res.statusCode === 200 ){
					resolve(body);
				}
			});
		});
	}
	_parseImgUrls(){
		return new Promise( (resolve,reject) => {
			let rSrc = /(?:view_img_link[\s\S]*?src=")(.*?)(?:")/g;
			let result;
			let urlArr = [];

			while( (result = rSrc.exec(this._pageListHtml))!= null ){
				urlArr.push( result[1] );
			}
			resolve(urlArr);
		});
	}
	_downloadImgs(urlArr){
		let _this = this;
		let promises = urlArr.map( (item,index) => {
			this.count++;
			if( this.count > this._folderCount*1000 ){
				this._folderCount++;
				fs.mkdirSync('images/' + this._folderCount );
				console.log( '******************************');
				console.log( '***** added a new folder *****');
				console.log( '******************************');
			}
			return new Promise( (resolve,reject) => {
				let postFix = path.basename(item).split('.')[1];
				let url = 'http:' + item;

				request(url).pipe(
					fs.createWriteStream('images/' + this._folderCount + '/' + _this.count + '.' + postFix ).on('finish',err => {
						if(err) reject(err);
						resolve();
					})
				)
			});
		});
		return promises;
	}
}

let g1 = new Girl(22220);
g1.init();