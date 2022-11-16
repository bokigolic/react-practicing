import { getRandomIntInclusive } from "./random-utils";

const allCards = [
  'ZEKA', // index 0
  'ZEKA',
  'MEDA', //
  'MEDA',
  'LOPTA',
  'LOPTA',
  'ZVEZDA',
  'ZVEZDA',
  'MESEC',
  'MESEC',
  'TESLA',
  'TESLA',
  'SRCE',
  'SRCE',
  'SUNCE',
  'SUNCE', // index 15
];

const cardImages = {
  'LOPTA': 'ball.jpg',
  'SUNCE': 'sun.jpg',
  'ZVEZDA': 'star.jpg',
  'ZEKA' : 'rabbit.jpg',
  'MEDA': 'bear.jpg',
  'MESEC': 'moon.jpg',
  'TESLA':'tesla.jpg',
  'SRCE':'hart.jpg'
};

export const getMemoryGameCardImgSrc = (card)=> {
  let src = ''; // nista ili default slika...
  if (cardImages[card]) {
    src = '/static/img/memory-game-images/' + cardImages[card];
  }
  return src;
};


export const getMemoryGameShuffledCards = () => {
  let cards = []; // shuffled izmesane carde
  const vecUpotrebljeniIndexi = [];

  // while petlja
  while (cards.length < 16) {
    // while petlja vrti dok god ne bude 16 kartica

    const randomIndex = getRandomIntInclusive(0, 15);
    if (vecUpotrebljeniIndexi.includes(randomIndex)) {
      // tu karticu smo vec upotrebili
      // preskacemo...
    } else {
      const card = allCards[randomIndex];
      cards.push(card);
      vecUpotrebljeniIndexi.push(randomIndex);
    }
  }
  // popunjeno je svih 16 kartica
  return cards;
}


