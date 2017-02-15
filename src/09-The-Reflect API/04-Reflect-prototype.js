/**
 * Created by lixu on 17/2/15.
 */

// Reflect.setPrototypeOf方法用于设置对象的__proto__属性，对应Object.setPrototypeOf(obj, newProto)。
// Reflect.getPrototypeOf(obj)
// Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，如果第一个参数不是对象（包括null和undefined），
// Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错。

class Person {
    constructor(){
        this.name = 'lx';
    }
}

let person = new Person();

Person.prototype.age = 12; // Person { age: 12 }

let proto = {
    age :20000
};

Reflect.setPrototypeOf(person,proto);

console.log(Reflect.getPrototypeOf(person)); // Person {}





