/**
 * Created by lixu on 17/2/15.
 */
// Proxy.revocable方法返回一个可取消的 Proxy 实例。
// Proxy.revocable方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。

let person = {
    name: 'lx'
};

let handler = {
    get: function (target, property) {
        return Reflect.get(target, property)
    }
};
// let proxy = new Proxy(person,handler);
let {proxy, revoke} = Proxy.revocable(person, handler);
revoke();
console.log(proxy.name);