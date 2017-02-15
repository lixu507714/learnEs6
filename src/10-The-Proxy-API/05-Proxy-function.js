/**
 * Created by lixu on 17/2/15.
 */
// apply方法拦截函数的调用、call和apply操作。
// apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
// 直接调用Reflect.apply方法，也会被拦截。

function log(...info) { // 传了两个数组，但是只传了一个参数。  apply的坑。
    console.log(info);
    console.log('hello' + ' ' + info);
}
let handler = {
    apply: function (target, thisArg, argumentsList) {
        console.log(target);
        console.log(thisArg);
        console.log(argumentsList);
        if (argumentsList.length >=2) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};
let proxy = new Proxy(log, handler);
proxy(['lixu'], ['www']);