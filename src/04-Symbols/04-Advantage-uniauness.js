/**
 * Created by lixu on 17/2/9.
 */
// 优势
let symbol = Symbol.for('age');

let obj = {
    name : "lx",
    age : 20
};

function test(obj){
    let anotherSymbol = Symbol.for('age');
    obj[anotherSymbol] = 22;
}

test(obj);
console.log(obj[symbol]);
console.log(obj["age"]);