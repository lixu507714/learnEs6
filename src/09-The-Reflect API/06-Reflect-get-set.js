/**
 * Created by lixu on 17/2/15.
 */

// Reflect.set(target, name, value, receiver接收器)
// Reflect.set方法设置target对象的name属性等于value。
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
// Reflect.get(target, name, receiver).
// Reflect.has方法对应name in obj里面的in运算符。
// 如果第一个参数不是对象，Reflect.has和in运算符都会报错。

class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let mum = {
    _name: 'mum'
};

let person = new Person('lx', 24);

// console.log(Reflect.get(person, 'name')); // lx
// Reflect.set(person, 'name', 'anna', mum);
// console.log(mum); // { _name: 'anna' }
// console.log(Reflect.get(person, 'name')); // anna
console.log(Reflect.has(person,'name')); // true

