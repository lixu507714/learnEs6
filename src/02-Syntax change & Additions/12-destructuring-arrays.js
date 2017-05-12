/**
 * Created by lixu on 17/2/8.
 */
//解析 数组
let numbers = [1,2,3,4,5];
let [a,...b] = numbers;
console.log(a); // [2,3,4,5]

let h = 1;
let g = 2;
[h,g] = [g,h];
console.log(h); //2
console.log(g); //1
