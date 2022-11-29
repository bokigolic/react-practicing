export const abeceda = [
  'A',
  'B',
  'C',
  'Č',
  'Ć',
  'D',
  'Dž',
  'Đ',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'Lj',
  'M',
  'N',
  'Nj',
  'O',
  'P',
  'R',
  'S',
  'Š',
  'T',
  'U',
  'V',
  'Z',
  'Ž'
];

const cardImages = {
  'L': 'ball.jpg', // lopta
  'M': 'moon.jpg', // mesec
  'S': 'hart.jpg', // srce
  'Z': 'star.jpg', // zvezda
  // za domaci dopuniti sa preostalim slikama za celu abecede
};

export const getSlovaricaCardImgSrc = (slovo) => {
  let src = ''; // nista ili default slika...
  if (cardImages[slovo]) {
    src = '/static/img/slovarica-images/' + cardImages[slovo];
  }
  return src;
};