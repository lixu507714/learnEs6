/**
 * Created by lixu on 17/2/9.
 */
export class Helper {   // export ?????????
    static logTwice(message){
        console.log(message);
        console.log(message);
    }
}

// let helper = new Helper();
Helper.logTwice("logged!");

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        this.age = 11;
        console.log(this.name + ',' + this.age);
    }
}

class Persons extends Person {
    constructor(age) {
        super('max');
        this.age = age;
    }
}

// let person = new Person('lx');
// person.greet();

let persons = new Persons();
persons.greet();

