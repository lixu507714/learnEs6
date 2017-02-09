/**
 * Created by lixu on 17/2/9.
 */
//ES6引入了一种新的原始数据类型Symbol,表示独一无二的值.
//前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

let q = Symbol("1");
console.log(typeof q); // symbol

let q1 = Symbol("1");
console.log(q == q1); //false

let obj = {
  name : 'max',
  [q] : "eee"
};
console.log(obj[q]);
