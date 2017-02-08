/**
 * Created by lixu on 17/2/8.
 */
let obj = {
    name : 'max',
    age : 11,
    greet:function(){
        console.log(this.name+','+this.age);
    }
};
// let {name,greet:hello} = obj;
