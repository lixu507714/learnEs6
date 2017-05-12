/**
 * Created by lixu on 17/2/11.
 */

// 对象的拓展
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
// Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// 如果只有一个参数，Object.assign会直接返回该参数。
// Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

class Obj1 { // 目标对象
    constructor() {
        this.a = 2;
    }
}

class Obj2 { // 源对象
    constructor() {
        this.b = 3;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();
Object.assign(obj1, obj2);
console.log(obj1);
let obj = Object.assign(obj1,obj2);
console.log(obj1 instanceof Obj1); // true  instanceof 用于判断一个变量是否为某个对象的实例.


//Object.assign方法有很多用处。（1）为对象添加属性。

class Obj3 {
    constructor(){
        this.a = 1;
    }
}

class Obj4 {
    constructor(){
        this.b = 2;
    }
}

let obj3 = new Obj3();
let obj4 = new Obj4();
let objS = Object.assign({},obj3,obj4);
console.log(objS);

let person = {
    name : 'lx'
};

let boss = {
    name: 'anna'
};
console.log(person.__proto__ === Object.prototype); // true
Object.setPrototypeOf(person,boss);  // setPrototypeOf  Object.setPrototypeOf(obj, proto);  设置对象的原型。
// 参数：obj 必需。 对其设置原型的对象。proto必需。 新的原型对象。
// Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。
console.log(person.__proto__ == boss);  // true  name :'anna'
console.log(boss.name);




