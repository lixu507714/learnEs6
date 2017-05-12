/**
 * Created by lixu on 17/2/2.
 */
let cardAce = {
    name: 'Ace of Spades'
};
let cardKing ={
    name:'king of clubs'
};

let deck = new Map();
deck.set('lx',cardAce);
deck.set('kc',cardKing);

console.log(deck.size); // 2


deck.set('kc',cardKing); // 成员的值都是唯一的，没有重复的值。所以输出的还是 2
console.log(deck.size); // 2


// console.log(deck.delete('lx')); // true
// console.log(deck.add('lxxx')); // ?????????????

console.log(deck.get('lx')); // undefined  ?????????????






