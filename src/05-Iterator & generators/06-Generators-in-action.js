/**
 * Created by lixu on 17/2/10.
 */

function* gen(end){
    for(let i=0;i<end;i++){
        yield i;
    }
}
let it =  gen(2);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


let obj = {
  [Symbol.iterator] : god
};
function* god(){
    yield 1;
    yield 2;
}
for(let element of obj){
    console.log(element); // 1  2
}

