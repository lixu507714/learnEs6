/**
 * Created by lixu on 17/2/15.
 */
class Person {
    constructor(){
        this.name = 'lx';
    }
}

let person = new Person();

Person.prototype.age = 12; // Person { age: 12 }

let proto = {
    age :20000,
    greet(){
        console.log('hello');
    }
};

Reflect.setPrototypeOf(person,proto);
Reflect.apply(person.greet,null,[]); // hello



