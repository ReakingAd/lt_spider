1.jQuery对象和dom对象的区别：

![fff](jquery_object.png)

上图是jQuery对象，是一个jQuery在内部构建起来的类数组对象。拥有属性`0` `context` `length`  `prevObjects` `selector` 。这些属性及构建过程是在jQuery.fn.init()方法内进行的。

- `0` 第一个匹配到的dom对象
- `1` 第二个匹配到的dom对象
- `context` 上下文
- `length` 匹配到的dom对象的个数
- `prevObject` 将上一次查找的结果放入prevObject，供回溯时使用。是在pushStack()方法里做的这一步
- `selector` 传入jQuery.fn.init()参与构建本jQuery对象的选择器
- 特别的`__proto__`属性上存放jQuery原型上的方法。这样，这些方法就不用在每次创建jQuery对象时定义了，而是统一向原型继承而来。减少了存储空间、增加了性能。

也就是说，jQuery将选择器选中的dom元素（1个或多个），包装在了一个类数组对象中。增加了context、length、prevObject、selector属性。（便于其他jquery API调用？？）


`$.when()` 看起来跟 `Promise.all()` 功能一样啊。

**jQuery.Deferred()的设计理念来自于CommonJS Promise/A 规范**

ajax缓存的原理。启用缓存时是否server还会接收到请求？缓存在客户端？有效期多长？怎样避免缓存影响更新内容。
前端发送请求时，怎样修改请求头信息？接收到响应时，怎样读取响应头信息？比如ETAG
ajax请求的缓存只能用于get方式？post方式不能缓存？
使用localstorage手动缓存？



jQuery。ajax设置cache:false则始终不适用缓存，而是想服务器发送请求，得到200而不是304

[HTTP基本原理（格式详解）](http://blog.csdn.net/hudashi/article/details/50789006)
1. 静态文件的缓存：
	第一次请求一个css文件，response正常会返回状态码 200 。且header里面会有两个字段 Last-Modified:Mon, 27 Feb 2017 06:29:07 GMT     ETag:W/"287f-15a7e421f38"
	crtl+F5刷新页面，第二次请求同一个css文件时，浏览器自动在请求头中加入两个字段：
	If-Modified-Since:Mon, 27 Feb 2017 06:29:07 GMT 这个值就用第一次请求此css文件时response中Last-Modified的值。 If-None-Match:W/"287f-15a7e421f38" 改值就为第一次css时的响应头ETag的值。
	服务器接到这个请求时，分析出请求头中的两个字段值If-Modified-Since   If-None-Match。然后与服务器上的css文件的Last-Modified   ETag进行对比，如果一致，则返回响应，状态码
	304，意思就是告诉浏览器这个css文件从第一次请求到第二次请求之间这段时间，并没有改变。因此你使用浏览器自己的本地缓存的版本就可以。浏览器接受到这个304response后，就去本地缓存目录读取css文件，给浏览器渲染时使用，而不是再去服务器下载css文件。

	这两对字段的区别？貌似静态文件css、js、img、都有这两对字段。而对后端渲染页面接口的请求只有Etag那一对。
3. ajax缓存，应该只针对get请求会有缓存吧？就像加载静态资源的get请求似的。[weibo缓存](http://weibo.com/roguestyle/profile?rightmod=1&wvr=6&mod=personnumber&is_all=1&is_search=1&key_word=%E7%BC%93%E5%AD%98#_0)
   默认会使用ajax缓存。
4. 1
5.
问题：视频网站视频的缓存时怎么搞得？ 