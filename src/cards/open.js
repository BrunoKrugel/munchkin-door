import Keyv from 'keyv';
const card = new Keyv(); // for in-memory storage

export async function pick() {
    var newCard = new Boolean(true);
    var cardPicked = Math.floor((Math.random() * 151));
    while (newCard) {
        var cardFlag = await card.get('card', cardPicked);
        if (cardFlag != cardPicked) {
            newCard = false;
        } else {
            cardPicked = Math.floor((Math.random() * 151));
        }
    }
    await card.set('card', cardPicked);
    return cardPicked;
}

export async function reset(){
    await keyv.clear();
}