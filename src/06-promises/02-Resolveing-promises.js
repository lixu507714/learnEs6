/**
 * Created by lixu on 17/2/10.
 */
// 解析

// Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）。



// Promise新建后立即执行，所以首先输出的是“Promise”。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以“Resolved”最后输出。

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done!');
    }, 1000);
});

promise.then(function (value) {
    console.log(value);
});