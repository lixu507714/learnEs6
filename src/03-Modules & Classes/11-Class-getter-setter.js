/**
 * Created by lixu on 17/2/9.
 */
// Class的取值函数（getter）和存值函数（setter）
class Person {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name (value){
        if(value.length> 2){
            this._name = value;
        }
        console.log("lixu");
    }
}

let person = new Person('max');

console.log(person.name); // MAX  实例的方法
console.log(person._name); // max 属性

person.name = 'anna'; // lixu
console.log(person.name); // ANNA



