/**
 * Created by lixu on 17/2/15.
 */

// Reflect.apply(func, thisArg, args)
// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
// 一般来说，如果要绑定一个函数的this对象，可以这样写fn.apply(obj, args)，但是如果函数定义了自己的apply方法，
// 就只能写成Function.prototype.apply.call(fn, obj, args)，采用Reflect对象可以简化这种操作。

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greet(aas) {
        console.log(aas+'hello, I am '+ this.name);
    }
}

let person = Reflect.construct(Person,['max',11]);
// Reflect.apply(person.greet,person,[]); // hello, I am max

Reflect.apply(person.greet,{name:'lx'},['...']); // ...hello, I am lx

