/**
 * Created by lixu on 17/2/15.
 */
// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象。
// Object.defineProperty(obj:需要定义属性的对象。, prop:需定义或修改的属性的名字。, descriptor:将被定义或修改的属性的描述符。)
// 该方法允许精确添加或修改对象的属性。
// Reflect.defineProperty(target, propertyKey, attributes)

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

// 使用 Object.defineProperty() 则允许改变这些额外细节的默认设置。例如，默认情况下，使用 Object.defineProperty() 增加的属性值是不可改变的。
// configurable 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，也能够被删除。默认为 false。
// writable 当且仅当该属性的 writable 为 true 时，该属性才能被赋值运算符改变。默认为 false。
// Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
// Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

console.log(Reflect.isExtensible(person)); // true

Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person)); // false

Reflect.defineProperty(person,'hobbies',{
    writable:true,
    value:['swimming','sport']
});
person.hobbies = ['nothing']; // 赋值运算符

// Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。
// Reflect.deleteProperty(person,'age');
console.log(person.hobbies); // [ 'swimming', 'sport' ]

