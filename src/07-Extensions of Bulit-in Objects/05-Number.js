/**
 * Created by lixu on 17/2/11.
 */
// Number.isFinite(), Number.isNaN()
// Number.isFinite()用来检查一个数值是否为有限的（finite）。
// Number.isNaN()用来检查一个值是否为NaN。
// Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值.

let number = 10000;
console.log(Number.isFinite(number)); // true

let numbers = 0.222;
console.log(Number.isInteger(numbers)); //  false

let numberss = NaN;
console.log(Number.isNaN(numberss)); //  true

let numbersss = 12.0;
console.log(Number.isInteger(numbersss)); //  true

let numberssss = 12.222;
console.log(Number.isInteger(numberssss)); //  false



