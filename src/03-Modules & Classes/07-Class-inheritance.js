/**
 * Created by lixu on 17/2/8.
 */
//类的继承
class Person { //类
    constructor(name) { //构造函数
        this.name = name;
    }

    greet() {
        console.log("hello"+this.name+','+this.age);
    }
}
class Max extends Person {
    constructor (age) {
        super ('max'); // 调用父类的constructor(name)   super表示父类的构造函数，用来新建父类的this对象。
                       // 子类必须在constructor方法中调用super方法,否则新建实例时会报错。这是因为子类没有自己的this对象，
                       // 而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
        this.age = age;
    }
    greet(){
        console.log("hello");
    }
    greetTwice(){
        super.greet();
        super.greet();
    }
}
let max = new Max(11); //实例
// let person = new Person("lx");
// console.log(person);
// person.greet();
max.greetTwice();



