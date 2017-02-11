/**
 * Created by lixu on 17/2/10.
 */

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve('Done!');
        reject('Failed!');
    }, 1000);
});

promise.then(function (value) {
    console.log(value);
},function(error){
    console.log(error);
});