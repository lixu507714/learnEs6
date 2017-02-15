/**
 * Created by lixu on 17/2/15.
 */
// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
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

console.log(Reflect.ownKeys(person)); // [ '_name', 'age' ] 返回的是person的所有的属性。

