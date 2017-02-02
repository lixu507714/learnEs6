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

console.log(deck); // Map {'lx' => { name: 'Ace of Spades' },'kc' => { name: 'king of clubs' } }

