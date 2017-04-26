1. 选择符优先级、继承、层叠机制代替`!important`
2. 盒模型与外边距重叠问题的原因和解决
3. 匹配css选择符的DOM元素的js函数
	
		function $$(selector,context){
			context = context || document;
			var elements = context.querySelectorAll(selector);
			return Array.prototype.slice.apply(elements);
		}