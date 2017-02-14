/**
 * Created by lixu on 17/2/14.
 */
let set = new WeakSet([{a:1},{b:2},{b:2}]);
console.log(set.has({b:2})); // false


let obj1 = {a:1};
let obj2 = {b:2};
let sets = new WeakSet([obj1,obj2,obj2]);
console.log(sets.has(obj2)); // true  表示某个值是否在WeakSet实例之中。


