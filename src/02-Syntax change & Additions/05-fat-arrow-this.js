/**
 * Created by lixu on 17/2/7.
 */
var button = document.querySelector('button');
var fn2 =()=>console.log(this);
// function fn(){
//     console.log(this); //window
// }
button.addEventListener('click',fn2);




