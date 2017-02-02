/**
 * Created by lixu on 17/2/2.
 */
let cardAce = {
    name: 'Ace of Spades'
};
let cardKing = {
    name: 'king of clubs'
};

let key1 = {a:1};
let key2 = {x:2};

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck.get(key1)); // { name: 'Ace of Spades' }
