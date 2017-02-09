/**
 * Created by lixu on 17/2/9.
 */
// 子类化  转变
class ConvertableArray extends Array {
    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('lixu' + value));
        return returnArray;
    };
}

let contert = new ConvertableArray();
contert.push(1);
contert.push(2);
contert.push(3);
console.log(contert.convert());