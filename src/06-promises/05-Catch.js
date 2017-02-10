/**
 * Created by lixu on 17/2/10.
 */

// 捕获
function waitAsecond(seconds) {
    return new Promise(function (resolve, reject) {
        if(seconds > 2){
            reject('Reject!');
        }
        setTimeout(function () {
            seconds++;
            resolve(seconds);
        }, 1000)
    })
}

waitAsecond(2)
    .then(waitAsecond)
    .then(function (seconds) {
        console.log(seconds);
    })
    .catch(function (err) {
        console.log(err);
    });