**node.js**

1. Node在启动时会生成一个全局变量process
2. PHP是同步阻塞的方式，不支持多线程。（php不能多线程编程吗？）
3. Nginx纯c编写，事件驱动，异步I/O
4. 浏览器中javascript在单线程上执行，并且与UI渲染公用一个线程。这就意味着javascript在执行的时候UI渲染和响应是处于停滞状态的。（问题：1.为什么js要和UI公用一个线程？2.UI渲染和响应是指什么？css效果或动画这些？）
5. 事件循环时异步实现的核心
6. 自定义Error
	
		let kk = new Error('Too much async call in quene');
		kk.name = 'TooMuchAsyncCallError';	
		
		throw kk;

7. chrome的每个标签都是一个V8实例，每个标签是一个进程。
8. 全局作用域global直到进程退出才被释放。
9. 通过delete删除对象的属性有可能干扰V8的优化，所以通过赋值方式解除应用更好。例如：
		
		let a ={aaa:1};
		a = undefined;
10. http模块作为客户端时，默认有个并发连接数5的限制。那request模块是否也有这个限制，会不会导致我的Crawler有最大并发限制。P163。如果是的话，需要取消掉request模块的连接池管理
11. websocket不是在http基础上建立，而是在tcp上定义的独立协议。但是ws的握手部分缺失由http完成的。这一点看起来有些让人困惑。
12. 整站换https
13. 响应头信息中，`Content-*`字段很关键。
	Content-Type:text/plain
	Content-Encoding:gzip
	Content-Length:21170
Content-Type告诉浏览器传输的文件的类型，浏览器好根据不同类型采取不同的处理方式。例如：`<h1>Hello</h1>`传递给浏览器时，如果Content-Type的值为text/plain，则页面上会将`<h1>Hello</h1>`以文本的形式显示出来
。而如果Content-Type值为text/html，页面上会把`<h1>Hello</h1>`当做html代码渲染，只显示出Hello在页面上。
要知道某个文件到底是什么type可以使用mime库，
	
		var mime = require('mime');
		mime.loopup('file.txt');    // 'text/plain'