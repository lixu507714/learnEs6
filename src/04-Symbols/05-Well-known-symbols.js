/**
 * Created by lixu on 17/2/9.
 */

//在 Symbol.toPrimitive 属性(用作函数值)的帮助下，一个对象可被转换为原始值。
// 该函数由字符串参数 hint 调用，目的是指定原始值转换结果的首选类型。
// hint 参数可以是"number"、"string" 和 "default" 中的一种。

let numbers = [1,2,3];
numbers[Symbol.toPrimitive] = function (){
    return 999;
};
console.log(numbers + 1);
