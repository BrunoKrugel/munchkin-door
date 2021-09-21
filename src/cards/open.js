import Keyv from 'keyv';

import {
    createRequire
} from "module";

const require = createRequire(
    import.meta.url);
    
const card = new Keyv(); // for in-memory storage
var doorCard = require('../resources/doorCard.json');

export async function pick() {
    let index = 0;
    let newCard = new Boolean(true);
    let cardPicked = Math.floor((Math.random() * (4)) + 1);
    console.log("I picked: " + cardPicked);
    while (newCard) {
        index++;
        let cardFlag = await card.get(String(cardPicked), 'false');
        console.log("I read: " + cardFlag);
        if (index > 5) return "No more cards available";
        if (cardFlag != 'true') {
            console.log("cardFlag == false");
            newCard = false;
        } else {
            cardPicked = Math.floor((Math.random() * (4)) + 1);
            console.log("I re-picked: " + cardPicked);
        }
    }
    await card.set(String(cardPicked), 'true');
    return JSON.stringify(doorCard[cardPicked])
}

export async function reset() {
    await Keyv.clear();
}