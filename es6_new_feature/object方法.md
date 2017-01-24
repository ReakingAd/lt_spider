##ES5中Object的方法##

- Object.create() 
- Object.keys() 返回将对象的自身可枚举属性组成数组返回


##ES6中Object的方法##

- Object.is(123,'123')   判断传入的两个参数是否**同值相等**。行为类似于ES5的**===**。但是比后者好的地方在于，Object.is(NaN,NaN)返回true Object.is(-0,+0)返回false   
- Object.assign(target,source1,source2)  将原对象的属性复制到目标对象中。（浅拷贝）
  用图：
	1. 为对象增加属性
	2. 对函数的options参数设置默认值。类似$.extend()的使用