/*
Primer kako izgleda board
[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
*/

/*
Treba razmisljati kako bi naredio radniku da proveri jesu li sva polja popunjena

Na priemr zamisliti da je u pitnju hotel od tri sprata i na svakom sprat tri sobe

Zamisliti da je radnik GLUP i da mu treba precizirati
Spratovi se zovu row 0,1, i 2
a sobe se zovu col 0, 1, i 2

Nardjenje glasi: idi na SVAKI (EACH) sprat i proveri SVAKU (EACH) sobu


*/


const isAllFieldsFiled = (board) => {
  // 1) pocinjemo sa pretpostavkom dq su sve sobe popunjene
  let filled = true;
  // 2) a onda prgledavamo i ako je samo jedna prazna menjamo rezultat na NISU POPUNJENE i niko vise ne moze taj reziultat da vrati dajesu
  board.forEach((row) => {
    row.forEach((col) => {
      // ovde ulazimo u svaka soba
      // uslo smo
      // proveravamo je li popunjena ili prazna
      if (col === null) {
        filled = false;
      }
    });
  });
  // 3) vracamo rezultat da li je popunjeno
  return filled;
};

const isAllFieldsFiledV2 = (board) => {
  // 1) pocinjemo sa pretpostavkom dq su sve sobe popunjene
  let filled = true;
  // 2) a onda prgledavamo i ako je samo jedna prazna menjamo rezultat na NISU POPUNJENE i niko vise ne moze taj reziultat da vrati dajesu
  for (let row = 0; row <= 2; row++) {
    // each row
    for (let col = 0; col <= 2; col++) {
      // each col
      const field = board[row][col];
      if (field === null) {
        filled = false;
      }
    }
  }
  // 3) vracamo rezultat da li je popunjeno
  return filled;
};



const isWinInRows = (board) => {
  if (board[0][0] === null) {
    // prvo polje je null znaci prvi red sigurno NIJE WIN
    return false;
  } else {
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
      return true;
    } else {
      // jedno polje se ipak razlikuje, NIJE WIN
      return false;
    }
  }
}


export const isTicTacToeFinished = (board) => {
  // test 1)
  if (isWinInRows(board)) {
    return true;
  }

  // test 2) da li su sva polja popunjena
  if (isAllFieldsFiled(board)) {
    // znaci sva su polja popunjena
    // znaci igra je FINISHED na jedan nacin
    return true;
  } else {
    return false;
  }

};