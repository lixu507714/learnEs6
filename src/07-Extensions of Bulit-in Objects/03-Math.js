/**
 * Created by lixu on 17/2/11.
 */
// Math.sign()
// Math.sign方法用来判断一个数到底是正数、负数、还是零。 它会返回五种值。
// 参数为正数，返回+1； 参数为负数，返回-1；
// 参数为0，返回0； 参数为-0，返回-0;
// 其他值，返回NaN。

// Math.trunc()
// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
// 对于空值和无法截取整数的值，返回NaN。

// Math.cbrt()
// Math.cbrt方法用于计算一个数的立方根。

let number = -23;
console.log(Math.sign(number)); // -1

let numbers = 23;
console.log(Math.sign(numbers)); // 1

let string = 'string';
console.log(Math.sign(string)); // NaN