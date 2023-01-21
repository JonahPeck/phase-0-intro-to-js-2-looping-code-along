// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
*/

const hold = new Array();
const cards = (["Jonah", "Maile", "Jon"]);
const birthday = (["surprise", "surprise", "surprise"]);
function writeCards(cards) {
    for (let i = 0; i < birthday.length; i++) {
       // console.log(`Thank you, ${cards[i]}, for the wonderful ${birthday} gift!`);
        hold.push(`Thank you, ${cards[i]}, for the wonderful ${birthday[i]} gift!`);
    }
    //hold.upshift(writeCards);
return hold;
//console.log(hold);
}   

function countDown(i) {
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
