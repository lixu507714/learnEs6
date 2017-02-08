/**
 * Created by lixu on 17/2/7.
 */

//箭头函数
// function fn(){
//     console.log('hello');
// }
// fn();

const fn = () => {
  console.log('hello');
};
fn();

fns = (a,b) => a+b;
console.log(fns(2,3));

setTimeout(() => console.log(0),3000);

