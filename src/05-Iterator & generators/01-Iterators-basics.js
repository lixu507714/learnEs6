/**
 * Created by lixu on 17/2/10.
 */
// Iterator（遍历器）
//（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
//（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
//（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
//（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
//每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

let array = [1, 2, 3];
// let it = array[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

    function makeIterator(array) {
    let nextIndex = 0;
    // return {
    //     next: function () {
           return nextIndex < array.length ? {value:nextIndex++, done:false} : {value :undefined,done:true};
    //     }
    // }
}
// makeIterator([1,2,3]);
// let it = array[Symbol.iterator]();





array[Symbol.iterator] = function () {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {value: nextIndex++, done: false} : {value: undefined, done: true};
        }
    }
};
let it = array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


