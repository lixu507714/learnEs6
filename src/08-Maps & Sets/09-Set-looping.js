/**
 * Created by lixu on 17/2/14.
 */
// Set结构的实例有四个遍历方法，可以用于遍历成员。
let set = new Set([1, 2, 3]);

// set.add(1);
// set.delete(2);
console.log(set.has(1)); // true
for (element of set.entries()) {
    console.log(element); // [ 1, 1 ]   [ 2, 2 ]   [ 3, 3 ]
}
