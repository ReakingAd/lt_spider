// function test(options){
//     let {a:aa,b:bb,c:cc} = options;
//     console.log(aa,bb,cc)
// }

// let options = {
//     a:1,
//     b:2,
//     c:3
// }

// test(options);


// function test(options){
//     ({a:this.aa,b:this.bb,c:this.cc} = options)
// }
// test.prototype.print = function(){
//     console.log(this.aa)
//     console.log(this.bb)
//     console.log(this.cc)
// }

class test{
    constructor(options){
        // this.aa = options.a;
        // this.bb = options.b;
        // this.cc = options.c;
        ({a:this.aa,b:this.bb,c:this.cc} = options)
    }
    print(){
        console.log(this.aa)
        console.log(this.bb)
        console.log(this.cc)
    }
}

let options = {
    a:1,
    b:2,
    c:3
}

let t1 = new test(options);
t1.print();