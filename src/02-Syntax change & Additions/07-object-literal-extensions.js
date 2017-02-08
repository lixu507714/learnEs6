/**
 * Created by lixu on 17/2/7.
 */
//对象的模式的拓展

// let obj = {
//   name : "lx",
//   age : 25
// };
// console.log(obj);

let name = "lx";
let age = 22;
let obj = {
  name,
  age,
  // greet:function(){
  //     console.log(this.name+', '+ this.age);
  // }
    greet(){
        console.log(this.name+', '+ this.age);
    }
};
obj.greet();



let ageField = 'age';
let objs = {
    'names' : '123',
    [ageField] : 23,
    'greets me'(){
        console.log(this.names+', '+ this.age);
    }
};
objs['greets me']();
console.log(objs[ageField]); // 23
