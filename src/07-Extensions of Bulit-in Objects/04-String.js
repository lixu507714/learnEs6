/**
 * Created by lixu on 17/2/11.
 */

// includes(), startsWith(), endsWith()
// 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部

let name = "Maximilian";
console.log(name.includes('M')); // true

let names = "Maximilian";
console.log(name.startsWith('Max')); // true
console.log(name.startsWith('xi')); // false
console.log(name.endsWith('an')); // true

console.log(`111222`);

// let a = 2;
// let b = 3;
//
// tag`hello ${a+b} world ${a*b}`;