/**
 * Created by lixu on 17/2/7.
 */

//const声明的变量只可以在声明时赋值，不可随意修改.
const AGES = [11,22,33];
AGES.push(44);
console.log(AGES);

const OBJ = {
    age :333
};
console.log(OBJ);
OBJ.age = 444;
console.log(OBJ);