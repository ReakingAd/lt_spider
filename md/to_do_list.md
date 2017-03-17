**任务列表**

6. 前端自定义事件、pubsub、nodejs的events
6. jQuery的promise、deferred
	- [jQuery中文文档](http://www.jquery123.com/)
	- [learning jquery](http://learn.jquery.com/)
6. jQuery的ajax源码 。慕课网jQuery源码
7. chrome插件开发，删掉或者替换博客的头像，握草。（刚需）
3. undersocre.js lodash.js
	- [undersocre源码](http://yalishizhude.github.io/tags/underscore/)
	- [undersecro源码](http://www.html-js.com/article/Underscorejs-source-code-analysis-of-underscorejs-source-code-analysis%203031)
	- [underscore中文文档](http://www.css88.com/doc/underscore/) 
3. [编写restful API --廖雪峰](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735914606943e2866257aa644b4bdfe01d26d29960b000)
2. 百度搜索特效。“黑洞”，“旋转”，“翻转”
3. 弄个前端学习资源列表页面。
3. 加入ESLint
5. vue 待办事件的webapp
6. vue 重写衬衫页？可否用websocket优化加载，至少用上ajax分布加载。
6. socket.io和chrome插件做聊天系统。我的demo中后去ip有问题，查查。添加emoji表情。
7. 安全方面：
   - xss 跨站脚本攻击。例如，把用户输入的内容直接append到页面上。这样用户就能把一个script标签放入页面中执行。进而获取cookie等的操作，与后端通信。
   - csrf 跨站请求伪造。 用户登录网站a，黑客引诱用户点击网站b，网站b内写着向a网站发送请求		 的代码。假如a网站修改头像的功能是get方式，那么b网站只需要预写好字段和值，放入img的src	 属性上，就可以在用户点击了b网站时，修改a网站上用户的头像。因为img的src是不受同源策略     222影 响的。因此增删改查操作尽量不要使用get请求，尽管get请求比post请求速度快。那post请求的接口，**黑客是怎么处理跨域问题的呢？答案是，form表单提交不管是get还是post都不受同源策略的影响。还有一个问题，ajax使用的是xmlHttpRequet对象，ajax在跨域访问时，浏览器做了限制不允许js读取返回信息,是这样吗？也就是说，其实server是返回了结果的，只是浏览器不让js读这结果。对吗？**
	  csrf的防范方法是用户登录网站a，则服务器生成随机数，传给前端，前端提交时，带着这个随机数提交。这样黑客的网站b是拿不到这个随机数的。网站a的后端拿到请求后，先判断随机数是否正确，不正确不做处理。
	这也就是为什么浏览器有同源策略的原因，不然用户不小心进入黑客的网站b后，网站b可以带着用户的cookie对任何网站发送post请求，接收到请求的后端，根据cookie判断出sessionid就会认为，请求中的操作确实是用户a的发起的。
8. http状态码、restful API
9. 自己写的爬虫队列的问题：1.怎么处理stream？比如下载图片。在回调里好像处理不了。因为需要request的返回值buffer，才能拼接写stream
						2.可以限制并发数了，比如同时发起10个请求，但是对于爬到的结果进行处理时，却没有做任何判断。这会不会有可能导致
						  处理出具的并发越积越多。
10. nodejs升级7.6 支持async


****
#[前端学习资源](https://cnodejs.org/topic/56ef3edd532839c33a99d00e)#
#[大量面试题](https://cnodejs.org/topic/56ef3edd532839c33a99d00e)#
***

- 一些基本dom操作及事件绑定
- 三列布局
- 数组去重
- 对象深浅拷贝

11. 主页采用多块多列布局


****
[node并发测试框架](https://github.com/mcollina/autocannon)

****

- isNaN()到底是啥规则？

	isNaN('010-23232323')  // true
	isNaN(010-232323233)   // false
	isNaN( NaN ) // true
- 验证手机、固话。验证不能含有空格


#blog参考#


footer：诺贝尔奖得主、时代周刊封面人物、
“终将变成我们讨厌的人”“我讨厌有钱人。”

音乐播放那个按钮，找回来

take me to shanghai 伴奏

jquery promise api 用在show页面。
#好文章#

- [SEO攻略一](http://www.duanliang920.com/learn/SEO/al/308.html)
- [ajax全接触](https://segmentfault.com/a/1190000008697448?share_user=1030000008431166&utm_source=Weibo&utm_medium=shareLink&utm_campaign=socialShare&from=singlemessage&isappinstalled=0)


websocekt聊天室，局域网内ip相同，因此按ip不行。按mac地址？？php怎么获取


2. [react.js阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)


#网页游戏：#

1. [扫雷](http://minesweeperfus.zizisoft.com/)


[腾讯面试：0-9999一万个数字中有多少个数字7](http://www.dodobook.net/linux/3339)

使用一下ltAlert()啊，在页面上


#新功能#
1. react => 做一个单词记忆webapp
2. react =>todolist
3. 段子推送
4. game桃花岛