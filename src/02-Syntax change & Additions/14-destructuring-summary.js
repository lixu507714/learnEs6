/**
 * Created by lixu on 17/2/8.
 */
function fun (n,o){
    console.log(o);
    return {
        fun:function(m){
            return fun(m,n);
        }
    }
}

var a = fun(0);
a.fun(1);
a.fun(2).fun(3);

var k = 0;
for(i = 0,j = 0;i<10,j<7;i++,j++){
    k = i+j;
}
console.log(k);

(function(){
    var a=b=5;
})();
console.log(b);
console.log(a);