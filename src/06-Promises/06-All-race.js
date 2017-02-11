/**
 * Created by lixu on 17/2/10.
 */

// Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例。
// Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，
// 就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。

    //promise.all 如果有一个失败就返回失败，
    //promise.race 如果有一个成功就返回成功

let promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Resolved');
    },1000)
});

let promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('Rejected');
    },2000)
});

Promise.race([promise1,promise2])
    .then(function (success) {
        console.log('success');
    })
    .catch(function(err){
        console.log('err');
    });