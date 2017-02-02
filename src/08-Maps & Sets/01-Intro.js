/**
 * Created by lixu on 17/2/1.
 */
// 数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set 本身是一个构造函数，用来生成 Set 数据结构。
// Set 函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。
// Set结构的实例有以下属性。
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
// 去重：
function dedupe(array) {
    return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) ;// [1, 2, 3]


// map
// JavaScript的对象（Object），本质上是键值对的集合（Hash结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
// Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，
// Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。
// 作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。