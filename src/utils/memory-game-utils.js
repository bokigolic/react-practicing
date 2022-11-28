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
  'AUTO',
  'AUTO',
  'REKET',
  'REKET', // ukupno 20
  'FLASA',
  'FLASA',
  'TELEFON',
  'TELEFON',
  'LAMPA',
  'LAMPA',
  'PALMA',
  'PALMA',
  'STO',
  'STO', // ukupno 30
  'FOTELJA',
  'FOTELJA',
  'CVET',
  'CVET',
  'KOCKA',
  'KOCKA', // indx 35
  // za doamci: dodati da bude 64 (index 63)
];

const cardImages = {
  'LOPTA': 'ball.jpg',
  'SUNCE': 'sun.jpg',
  'ZVEZDA': 'star.jpg',
  'ZEKA': 'rabbit.jpg',
  'MEDA': 'bear.jpg',
  'MESEC': 'moon.jpg',
  'TESLA': 'tesla.jpg',
  'SRCE': 'hart.jpg',
  // za domaci dopuniti sa novim slikama
};

export const getMemoryGameCardImgSrc = (card) => {
  let src = ''; // nista ili default slika...
  if (cardImages[card]) {
    src = '/static/img/memory-game-images/' + cardImages[card];
  }
  return src;
};


export const getMemoryGameShuffledCards = (size) => {
  const maxIndex = size - 1;
  let cards = []; // shuffled izmesane carde
  const vecUpotrebljeniIndexi = [];

  // while petlja
  while (cards.length <= maxIndex) {
    // while petlja vrti dok god ne bude 16 kartica

    const randomIndex = getRandomIntInclusive(0, maxIndex);
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


let timeStart = 0; // Vreme u momentu kad smo zapoceli merenje vremena
export const zapocniMerenjeVremena = () => {
  timeStart = Date.now(); //upisujemo  trtenutni broj milisekundi iz casovnika racunara
}
export const zavrsiMerenjeVremena = () => {
  // izmeri koloko je proslo vreman od timeStart i returnuj to izmreno vreme
  const timeNow = Date.now();
  const usedTime = timeNow - timeStart; // proteklo vreme
  return usedTime;
}

export const miliSecondsToDisplayFormat = (ms) => {
  const s = ms / 1000; // s su sekunde ms milisekunde
  // return s;
  if (s < 60) {
    // zaokruzejemo da uvek budu 3 decimale
    const sekundeString = '' + s; // broj postaje rec pod navodnicima
    const exploded = sekundeString.split('.'); // od '55.123' dobija se ['55', '123']
    let decimalniDeo = exploded[1];
    if (exploded[1]) {
      decimalniDeo += '000000'; // dodaje nule na kraj decimala
      decimalniDeo = decimalniDeo.slice(0, 3); // uzima prve tri cifre
    } else {
      // ako broj nije imao decimale
      decimalniDeo = "000" // ako broj nije imao decimale mi stavimo tri nule kao decimale
    }
    const displayTime = exploded[0] + '.' + decimalniDeo + ' sec';
    return displayTime;
  } else {
    // na 60 sekiundi ili vise vreme prikazujemo u minutama
    // cilj prikazati 5.251 min
    const m = s / 60; // minute
    const minuteString = '' + m; // to su sada minute pod navodnicima
    const exploded = minuteString.split('.');
    let decimalniDeo = exploded[1];
    if (exploded[1]) {
      decimalniDeo += '00000';
      decimalniDeo = decimalniDeo.slice(0, 3);
    } else {
      decimalniDeo = '000';
    }
    const displayTime = exploded[0] + "." + decimalniDeo + ' min';
    return displayTime;
  }
}

