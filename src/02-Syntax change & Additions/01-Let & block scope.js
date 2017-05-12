/**
 * Created by lixu on 17/2/7.
 */
//syntax changes & extensions 语法的改变和拓展

// var name = "lixu";
// console.log(name);

let age = 20;
//let声明的变量拥有块级作用域。 所以以下输出的age，一个是22，一个是20；
if (true) {
    let age = 22;
    console.log(age);
}
console.log(age);


var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[6]();

// let 不存在变量提升
// 变量提升 ：var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined；

console.log(z);
var z = 1; // undefined

// console.log(x);
// let x = 2; // 报错

// var tem = 123;
// if(true){
//     tem = 'abc';
//     let tem;
// }

var tem = new Date();
function s() {
    console.log(tem);
    if (false) {
        var tem = '123';
    }
}
s();



