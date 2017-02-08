/**
 * Created by lixu on 17/2/7.
 */
//默认的参数值
function isEqualTo(number = 11,compare){
    console.log(number); //12
    console.log(compare); //undefined
    return number == compare; //false
}
console.log(isEqualTo(12)); //false

//如果传值则用的是传进去的值，否则是默认值。

