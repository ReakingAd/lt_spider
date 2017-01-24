****
#Map#

ES5中用Object存储key-value键值对信息，局限是key只能是String类型。ES6的Map类型弥补了这个缺陷，key值不仅可以是String类型，也可以是Object、Boolean、Number等，真正实现了映射。

**实例化一个Map：**

	let obj = {a:'aaa'};
	let m = new Map([
		[obj,11111],
		['b',22222]
	]);

**获取值**

	m.get(obj)

**添加新key-value**
	
	m.set('ccc',33333)

**获取Map的key个数**

	let length = m.size

**删除key**

	m.delete('b')

**遍历**

1. 函数遍历：

		m.forEach( (value,key) => {
			console.log( value );
		});
	
	注意函数中参数的顺序，value在前key在后。这其实和Array的forEach()遍历时的参数顺序是一致的。而与jQuery的$().each()参数的顺序是相反的。

2. for...of..遍历：

		for( let key of m.keys() ){
			console.log(x);
		}
	
		for( let value of m.values() ){
			console.log( value );
		}
	
		for( let [key,value] of m.entries() ){
			console.log( key );
			console.log( value );
		}
