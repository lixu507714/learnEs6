/**
 * Created by lixu on 17/2/7.
 */

//变量提升
function as() {
    age = 11;
}
let age;
as();
console.log(as());//undefined
console.log(age);// 11