/**
 * Created by lixu on 17/2/9.
 */
// 优势
let symbol = Symbol.for('sge');

let obj = {
    name : "lx",
    age : 20
};

function test(obj){
    let anotherSymbol = Symbol.for('sge');
    obj[anotherSymbol] = 22;
}

test(obj);
console.log(obj[symbol]);
console.log(obj["age"]);