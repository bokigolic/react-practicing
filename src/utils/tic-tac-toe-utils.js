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


export const isAllFieldsFiled = (board) => {
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



const isWinInAnyRow = (board) => {
  for (let row = 0; row <= 2; row++) {
    const firstField = board[row][0];
    const secondField = board[row][1];
    const thirdField = board[row][2];
    if (firstField === null) {
      // prvo polje je null znaci prvi red sigurno NIJE WIN
      // return false;
    } else {
      if (firstField === secondField && firstField === thirdField) {
        // WIN
        // return true; // returnujem oodamh WIN jer cim je pronadjena WIn bilo gde gotova je igra
        return firstField;
      } else {
        // jedno polje se ipak razlikuje, NIJE WIN
        // return false;
      }
    }
  }
  // if not win
  return false;
};


const isWinInAnyCol = (board) => {
  for (let col = 0; col <= 2; col++) {
    const firstField = board[0][col];
    const secondField = board[1][col];
    const thirdField = board[2][col];
    if (firstField === null) {
      // proverenoi je da je prvo polje kolone null NIJE WIN u toj koloni;
    } else {
      if (firstField === secondField && firstField === thirdField) {
        // WIN
        // return true; // returnujemo odmah WIN, je cim je pronadjen WIN igra ej gotova i nema daljih provera
        return firstField;
      } else {
        // jedno polje se ipak razlikuje, NIJE WIN
        // return false;
      }
    }
  }
  // if not win
  return false;
};


const isWinInDiagonal1 = (board) => {
  // diagonal from top left
  const firstField = board[0][0];
  const secondField = board[1][1];
  const thirdField = board[2][2];
  if (firstField === null) {
    // ako je gore levo polje prazno onda nemam WIN u prvoj dijagonali
  } else {
    if (firstField === secondField && firstField === thirdField) {
      //WIN
      // return true; // Returnujemo odmah WIN, Igra je zavrsena i nema dalji provjera
      return firstField;
    }
  }
  return false;
};

const isWinInDiagonal2 = (board) => {
  // diagonal from top right
  const firstField = board[0][2];
  const secondField = board[1][1];
  const thirdField = board[2][0];
  if (firstField === null) {
    // ako je gore levo polje prazno onda nemam WIN u prvoj dijagonali
  } else {
    if (firstField === secondField && firstField === thirdField) {
      //WIN
      // return true; // Returnujemo odmah WIN, Igra je zavrsena i nema dalji provjera
      return firstField;
    }
  }
  return false;
};


export const isWin = (board) => {
  /*
  if (isWinInAnyRow(board) || isWinInAnyCol(board) || isWinInAnyDiagonal(board)) {
    return true;
  }
  */
  let win1 = isWinInAnyRow(board)
  if (win1 !== false) {
    return win1;
  }
  let win2 = isWinInAnyCol(board)
  if (win2 !== false) {
    return win2;
  }
  let win3 = isWinInDiagonal1(board)
  if (win3 !== false) {
    return win3;
  }
  let win4 = isWinInDiagonal2(board)
  if (win4 !== false) {
    return win4
  }

  // ako je doslo dovde znaci nemamo win.
  return false;
};


export const isTicTacToeFinished = (board) => {
  // test 1)
  if (isWinInAnyRow(board) || isWinInAnyCol(board) || isWinInDiagonal1(board) || isWinInDiagonal2(board)) {
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