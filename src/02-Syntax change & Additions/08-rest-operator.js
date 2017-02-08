/**
 * Created by lixu on 17/2/8.
 */
//
// let numbers = [1,2,3,4,5];
// function sumUp(toAdd){
//     let result = 0;
//     for(let i = 0;i<toAdd.length;i++){
//         result += toAdd[i];
//     }
//     return result; //1 3 6 10 15
// }
// console.log(sumUp(numbers));

//扩展运算符（...）也可以将某些数据结构转为数组
function sumUp(...toAdd){
    console.log(toAdd);
    let result = 0;
    for(let i = 0;i<toAdd.length;i++){
        result += toAdd[i];
    }
    return result; //1 3 6 10 15
}
console.log(sumUp(100,10,'20'));

