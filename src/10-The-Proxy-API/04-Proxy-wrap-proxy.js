/**
 * Created by lixu on 17/2/15.
 */
let person = {
    name: 'lx',
    age: 11
};
// get方法用于拦截某个属性的读取操作。
let handler = {};

let proxyHandler = {
    get: function (target, age) {
        return age in target ? target[age] : 'error'
    }
};
let proxy = new Proxy({}, handler);
let proxyProxy = new Proxy(proxy, proxyHandler);
Reflect.setPrototypeOf(person, proxyProxy);
console.log(proxy.name);