/**
 * Created by lixu on 17/2/10.
 */
// Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
// 从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
// 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与
// 函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）。
function* select(){
    yield 'House';
    yield 'Garage';
}
let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());