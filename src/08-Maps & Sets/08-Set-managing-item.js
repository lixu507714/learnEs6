/**
 * Created by lixu on 17/2/14.
 */
let set = new Set([1, 2, 3]);

// set.add(1);
// set.delete(2);
console.log(set.has(1)); // true
for (element of set) {
    console.log(element); // 1 2 3  值是唯一的，不会重复
}