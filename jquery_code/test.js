let Callbacks = {
	callback:[],
	add:function( fn ){
		this.callback.push(fn);
	},
	fire:function(){
		this.callback.forEach( (item,index) => {
			item();
		})
	}
}

Callbacks.add(function(){
	console.log(111111);
});
Callbacks.add(function(){
	console.log(22222222222);
});

Callbacks.fire();