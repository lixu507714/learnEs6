/**
 * Created by lixu on 17/2/11.
 */
// Array.from方法用于将两类对象转为真正的数组
// 常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。

// Array.of方法用于将一组值，转换为数组。
// 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
// Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

// fill方法使用给定值，填充一个数组。
// fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

// 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，
// 所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
// find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

let array = Array(3);
console.log(Array.from(array)); // [ undefined, undefined, undefined ]

let arrays = Array.of(1,2,3);
console.log(arrays);  // [ 1, 2, 3 ]


let arr = [1,2,3];
arr.fill(1);
console.log(arr); // [ 1, 1, 1 ]
arr.fill(100,1,2);
console.log(arr); // [ 1, 100, 3 ]

let inventory = [
    {name:'apple',quantity:2},
    {name:'banana',quantity:3},
    {name:'cherries',quantity:4}
];

function findCherries(fruit){
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 4 }



