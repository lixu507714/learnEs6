/**
 * Created by lixu on 17/2/2.
 */
let cardAce = {
    name: 'Ace of Spades'
};
let cardKing = {
    name: 'king of clubs'
};

let deck = new Map();
deck.set('lx', cardAce);
deck.set('kc', cardKing);

console.log(deck.size); // 2

// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

for (key of deck.keys()) {
    console.log(key); // lx kc
}

for (value of deck.values()){
    console.log(value); // { name: 'Ace of Spades' } { name: 'king of clubs' }
}

for (entries of deck.entries()){
    console.log(entries); // [ 'lx', { name: 'Ace of Spades' } ]   [ 'kc', { name: 'king of clubs' } ]
}

