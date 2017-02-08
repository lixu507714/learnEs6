/**
 * Created by lixu on 17/2/8.
 */
// import a,{valueKey as key,test} from './external.js';
// import {as} from './external.js';

// console.log(key);
// test();
// console.log(key);
// console.log(a);

import * as imported from './external.js';  //抛出对象的key和value
console.log(imported.valueKey);  //{ valueKey: 11, test: [Function: test], as: '我的世界' }


