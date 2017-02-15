/**
 * Created by lixu on 17/2/14.
 */
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。
// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。
class Person {
    constructor(name) {
        this.name = name;
    }
}

function TopObj() {
    this.age = age;
}
// Reflect.construct(target, args);
let person = Reflect.construct(Person,['Max'], TopObj); // TopObj { name: 'Max' }
// let person = new Person('Max'); // Person { name: 'Max' }
console.log(person.__proto__); // TopObj {}

console.log(TopObj.prototype); // TopObj {}

console.log(person.prototype); // undefined

