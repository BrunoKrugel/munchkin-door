import Keyv from 'keyv';
const card = new Keyv(); // for in-memory storage

import {
    createRequire
} from "module";

const require = createRequire(import.meta.url);

var doorCard = require('../resources/doorCard.json');

export async function pick() {
    var newCard = new Boolean(true);
    var cardPicked = Math.floor((Math.random() * 5));
    console.log("I picked: " + cardPicked);
    while (newCard) {
        var cardFlag = await card.get('card', cardPicked);
        console.log("I read: " + cardFlag);
        if (cardFlag != cardPicked) {
            console.log("cardFlag != cardPicked");
            newCard = false;
        } else {
            cardPicked = Math.floor((Math.random() * 5));
            console.log("I re-picked: " + cardPicked);
        }
    }
    await card.set('card', cardPicked);
    return JSON.stringify(doorCard[cardPicked])
}

export async function reset() {
    await Keyv.clear();
}