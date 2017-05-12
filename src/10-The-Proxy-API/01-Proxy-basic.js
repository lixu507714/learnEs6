/**
 * Created by lixu on 17/2/15.
 */
// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，
// 因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
// “对象是属性的集合”
// 对象都有属性。你可以get、set或删除它们或做更多操作。
// 对象都有原型。这也是JS中继承特性的实现方式。
// 有一些对象是可以被调用的函数或构造函数。 它可以接受两个参数：目标对象（target）与句柄对象（handler）。请看一个简单的示例：
let person = {
    name: 'lx',
    age: 11
};
// get方法用于拦截某个属性的读取操作。
let handler = {
    get: function (target, age) {
        return age in target ? target[age] : 'error'
    },

    // set方法用来拦截某个属性的赋值操作,get和set方法，就可以做到防止这些内部属性被外部读写。
    set: function (target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

let proxy = new Proxy(person, handler);
proxy.name = 'q1111';
console.log(proxy.name);

