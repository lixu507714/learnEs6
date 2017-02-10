/**
 * Created by lixu on 17/2/10.
 */
// 例子 迭代

// for of 遍历，
let person = {
    name: 'lx',
    hobbies: ['sport', 'cook'],
    [Symbol.iterator]: function () {  // 自己写一个遍历器去支持for of 遍历
        let i =0;
        let hobbies = this.hobbies;
        return {
            next : function () {
                let value = hobbies[i];
                i++;
                return {
                    done:i>hobbies.length ? true: false,
                    value:value
                }
            }
        }
    }
};

for(let hobby of person){
    console.log(hobby);
}