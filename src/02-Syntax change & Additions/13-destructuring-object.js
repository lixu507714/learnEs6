/**
 * Created by lixu on 17/2/8.
 */
let obj = {
    name: 'max',
    age: 11,
    greet: function () {
        console.log(this.name + ',' + this.age);
    }
};
// let {name,greet:hello} = obj;

let cat = 'big';
let dog = 'small';
let zoo = {cat, dog};
console.log(zoo); // { cat: 'big', dog: 'small' }


let cat1 = 'ken';
let dog1 = 'lili';
let zoo1 = {cat1: cat1, dog1: dog1};
console.log(zoo1); // { cat1: 'ken', dog1: 'lili' }


let dogs = {
    type: 'animal',
    many: 1
};

let {type, many} = dogs;
console.log(type, many); // animal 1


function animals(...types) {
    console.log(types)
}
animals('cat', 'dog', 'fish'); // ["cat", "dog", "fish"]
// 如果不用ES6的话，我们则得使用ES5的arguments。
let {toString : s} =123;
console.log(s === Number.prototype.toString); // true

[[1, 2], [3, 4]].map(([a, b]) => a + b); // ???????????

// （2）从函数返回多个值
// 数组
function example() {
    return [1, 2, 3];
}
let [a,b,c] = example();
console.log(c);

// 对象
function obj1() {
    return {
        as1: 1,
        bs1: 2
    }
}

let {as1,bs1} = obj1();
console.log(as1,bs1);


