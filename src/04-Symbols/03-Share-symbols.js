/**
 * Created by lixu on 17/2/9.
 */
// 有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。它接受一个字符串作为参数，
// 然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该
// 字符串为名称的Symbol值。


// Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。它们的区别是，前者会被登记在全局环境中
// 供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key
// 是否已经存在，如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个
// Symbol 值，但是调用Symbol("cat")30次，会返回30个不同的Symbol值。

let symbol1 = Symbol.for('sge');
let symbol2 = Symbol.for('sge');

let obj = {
    name : "lx"
};

function test(obj){
    let anotherSymbol = Symbol.for('sge');
    obj[anotherSymbol] = 22;
}

test(obj);
console.log(obj[symbol2]);