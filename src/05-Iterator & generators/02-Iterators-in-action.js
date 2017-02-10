/**
 * Created by lixu on 17/2/10.
 */
let array = [1, 2, 3, 4];
array[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
        next: function () {
            nextValue++;
            // return nextIndex < array.length ? {value: nextIndex++, done: false} : {value: undefined, done: true};
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            }
        }
    };
};
// let it = array[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for (let element of array){
    console.log(element);
}