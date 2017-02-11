/**
 * Created by lixu on 17/2/10.
 */
function waitAsecond(seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            seconds++;
            resolve(seconds);
        }, 1000)
    })
}

waitAsecond(0)
    .then(waitAsecond)
    .then(function (seconds) {
        console.log(seconds);
    });