/**
 * Created by lixu on 17/2/7.
 */
//默认的参数值
function isEqualTo(number = 11,compare){
    console.log(number); //12
    console.log(compare); //undefined
    return number == compare; //false
}
console.log(isEqualTo(12)); //false

//如果传值则用的是传进去的值，否则是默认值。

function f(){
    console.log('aaa');
}

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
let [x = f()] = [];


let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz); // "aaa"
// console.log(foo) ;// error: foo is not defined
