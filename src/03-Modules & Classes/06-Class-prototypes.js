/**
 * Created by lixu on 17/2/8.
 */
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("hello");
    }
}
let person = new Person("lx");
console.log(person);
person.greet();

console.log(person.__proto__ === Person.prototype); //true
