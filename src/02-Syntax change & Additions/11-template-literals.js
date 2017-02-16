/**
 * Created by lixu on 17/2/8.
 */
//模板文本
// 模板字符串是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
//在ES6中，我们可以使用新的语法$ {NAME}，并把它放在反引号里
//es5
var firsts = 'lx';
var lasts = 'xxx';
var names = 'Your name is ' + firsts + ' ' + lasts + '.';
console.log(names);

//es6
    let first = 'lx';
    let last = 'xxx';
let name = `Your name is ${first} ${last}. `;
//${first} = ' + first + ';字符串拼接是相同的. ``是字符串模板

// let url = `http://localhost:3000/api/messages/${id}`;

console.log(name);


//如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中.
//所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。
// $('#list').html(`
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// `);
//
// $('#lists').html(`
// <ol>
//   <li>first</li>
//   <li>second</li>
// </ol>
// `.trim());

$('#list').append( `
   there are ${name} <br> item
    in your basket, <em>${basket.onSale}</em>
  are on sale!
`);