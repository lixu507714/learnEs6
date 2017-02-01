/**
 * Created by lixu on 17/2/11.
 */
// 数组实例的copyWithin()
// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
// 然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
// Array.prototype.copyWithin(target, start = 0, end = this.length)
// 它接受三个参数。
// target（必需）：从该位置开始替换数据。
// start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

// 数组实例的entries()，keys()和values()   用于遍历数组.
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
// 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

for(let index of ['1','2'].keys()){
    console.log(index);  // 0 1
}
//
// for(let elem of ['1','2'].values()) {    // ???????????
//     console.log(elem);
// }
//
// for(let [index,elem] of ['1','2'].entries()){
//     console.log(index,elem);
// }
//

let array = [3,2,3];
let it = array.entries(); // 0 1
for(let ele of it){
  console.log(ele);   // [ 0, 3 ]  [ 1, 2 ]  [ 2, 3 ]
}