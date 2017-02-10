/**
 * Created by lixu on 17/2/10.
 */
// execution 执行
function* gen(end){
    for(let i = 0;i<end;i++){
        try {
            yield i;
        }catch(e){
            console.log(e);
        }
    }
}
let it = gen(2);
console.log(it.next().value);
console.log(it.return('An error ocurred'));
console.log(it.next().value);