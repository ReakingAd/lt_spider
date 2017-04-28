#未处理的问题#

1. 响应式布局的原理。例如banner变下拉（参考，bootstrap、Yii2默认首页）
2. 自适应的正方形
3. 函数节流及其应用，比如鼠标拖动改变窗口大小时，resize事件的监听
4. 行内元素是否可以设置padding？
5. box-sizing可以设置那几个值？都是什么意思
6. 闭包中带有setTimeout().setTimeout的异步易错点
7. 无序去重数组去n个数，其和为m。计算时间空间的复杂度

#预备知识#

1. 外边距重叠的现象、原因、解决方法。 [参考](https://www.zhihu.com/question/19823139)
2. BFC是什么的缩写   [参考](https://www.zhihu.com/question/19823139)
	bfc=block formating context


####

1. line-height与font-size挂钩，可以设置一个相对值，便于维护。例如：
	
		// 行高是字号的1.5倍，因此下次改变字号大小时，行高会跟着等比例，不用再手动修改数值。
		.button{
			font-size:20px;
			line-height:1.5;
		}
2. 现代浏览器默认的字体大小时16px。font-size设置em的值，是根据其父级的font-size属性值来计算的。其他属性（例如boder、padding），是基于元素自身的font-size来计算的。如果元素自身没有显式的设置font-size属性，则根据其从父级继承来的font-size计算。
3. css中的第一个变量：currentColor。存放着当前元素的color属性的值，即文本颜色。如果当前元素没有显式的设置color属性，则会去其父级中寻找。例如：

		// <hr>没有自己的color属性，那么currentColor存放的就是从父级继承来的#f00
		<div class="container">
		    text content xxxxxxxxxxxxxxxxxx
		    <hr>
		</div>
		<style>
		.container{
		    color:#f00;
		}
		hr{
		    height:.5em;
		    background-color:currentColor;
		}



#0427#

1. rgba 
	
	r=red 红色
	g=green 绿色
	b=black 黑色
	a=alpha  透明度
2. hsla

	h=hue 色调 0-360代表不同颜色。例如0、360红色，120绿色，240蓝色
	s=saturation 饱和度 0% - 100%
	l=lightness 亮度0% - 100%
	a=alpha 透明度  0 - 1  

3. 半透明边框，需要利用background-clip:padding-box;

# 0428 #

问题：
1. 源生的observer的方法名是什么？Object.defineProperty(),这个方法可以做到setter监听
2. css3 transition动画做轮播图，怎么实现循环播放？
3. 信封、优惠券边框效果。蚂蚁行军的选中效果。P49

http://www.360doc.com/content/14/1016/13/2792772_417403574.shtml