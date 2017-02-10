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
		});
	}
	_getPageListUrl(){
		return this._baseUrl + this.pageNum;
	}
	_getPageListHtml(){
		this.url = this._getPageListUrl()
		return new Promise( (resolve,reject) => {
			request.get(this.url,(err,res,body) => {
				if(err) {
					console.log('in down pagelist:' + err);
					fs.appendFileSync('err.txt','pagelist: ' + err + '\r\n');	
				}
				resolve(body);
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
				let _img = request(url,{timeout:3000},err => {
					if(err){
						console.log('error in downloading img: ' + err );
						fs.appendFileSync('err.txt','request image ' + err + '\r\n');
						resolve();
					}
				});

				_img.pipe(
					fs.createWriteStream('images/' + this._folderCount + '/' + _this.count + '.' + postFix ).on('finish',err => {
						if(err) {
							console.log('error in pipe img: ' + err );
							fs.appendFileSync('err.txt','in pipe' + err + '\r\n');
						}
						resolve();
					})
				)
			});
		});
		return promises;
	}
}
process.on('uncaughtException',err => {
	console.log('uncaught: ' + err);
	fs.appendFileSync('err.txt','in uncaughtException: ' + err + '\r\n');
});
let g1 = new Girl(2289);
g1.init();