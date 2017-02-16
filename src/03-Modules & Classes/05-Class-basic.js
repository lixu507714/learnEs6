/**
 * Created by lixu on 17/2/8.
 */
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log("hello");
//     }
// }
// let person = new Person("lx");
// console.log(person);
// person.greet();


// ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
class Animal {
    constructor (name){ // 构造函数:constructor内定义的方法和属性是实例对象自己的
        this.name = name; // this关键字则代表实例对象
    }

    hello(say){ // constructor外定义的方法和属性则是所有实例对象可以共享的。
        console.log(this.name +' have to '+say);
    }
}

let animal = new Animal('dog');
animal.hello('English');

class Cat extends Animal { // 子类必须在constructor方法中调用super方法,子类没有自己的this对象,而是继承父类的this对象
    constructor(){
        super('cat'); // 指代父类的实例（即父类的this对象）.如果不调用super方法，子类就得不到this对象。
    }
}

let cat = new Cat();
cat.hello('Chinese');

