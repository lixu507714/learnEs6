/**
 * Created by lixu on 17/2/7.
 */

//箭头函数
// function fn(){
//     console.log('hello');
// }
// fn();

// const fn = () => {
//   console.log('hello');
// };
// fn();
//
// fns = (a,b) => a+b;
// console.log(fns(2,3));
//
// setTimeout(() => console.log(0),3000);



class Animal {
    constructor (){
        this.name = 'dog';
    }
    // says(say){
    //     let that = this;
    //     setTimeout(function(){ // setTimeout中的this指向的是全局对象。
    //         // 1:第一种是将this传给self,再用self来指代this.2:第二种方法是用bind(this)
    //         console.log(that.name + ' says '+say);
    //     },1000)
    // }

    says(say){
        let that = this;
        setTimeout(function(){ // setTimeout中的this指向的是全局对象。
            // 1:第一种是将this传给self,再用self来指代this.2:第二种方法是用bind(this)
            console.log(that.name + ' says '+say);
        }.bind(this),1000)
    }
}
let animal = new Animal();
animal.says('English');



class Trial {
    constructor(){
        this.type = 'bike';
    }

    run(run) {
        setTimeout(() => { // 使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象.
            // 并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
            console.log(this.type + ' run ' + run);
        }, 1000)

    }
}

let trial = new Trial();
trial.run('quickly');


