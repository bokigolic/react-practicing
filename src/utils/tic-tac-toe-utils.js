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
  let answer = {
    win: false,
    winner: null,
    winCase: ''
  };
  //
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
        // return firstField;
        answer.win = true;
        answer.winner = firstField; // winner is 'X' or 'O'
        answer.winCase = 'row' + row; // row0 row1 or row2
      } else {
        // jedno polje se ipak razlikuje, NIJE WIN
        // return false;
      }
    }
  }
  // if not win
  return answer;
};


const isWinInAnyCol = (board) => {
  let answer = {
    win: false,
    winner: null,
    winCase: ''
  };
  //
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
        // return firstField;
        answer.win = true;
        answer.winner = firstField; // "X" or "O"
        answer.winCase = "col" + col; // col0 or col1 or col2
      } else {
        // jedno polje se ipak razlikuje, NIJE WIN
        // return false;
      }
    }
  }
  // if not win
  // return false;
  return answer;
};


const isWinInDiagonal1 = (board) => {
  // diagonal from top left
  let answer = {
    win: false,
    winner: null,
    winCase: ''
  };
  //
  const firstField = board[0][0];
  const secondField = board[1][1];
  const thirdField = board[2][2];
  if (firstField === null) {
    // ako je gore levo polje prazno onda nemam WIN u prvoj dijagonali
  } else {
    if (firstField === secondField && firstField === thirdField) {
      //WIN
      // return true; // Returnujemo odmah WIN, Igra je zavrsena i nema dalji provjera
      // return firstField;
      answer.win = true
      answer.winner = firstField;
      answer.winCase = "diagonal1"
    }
  }
  return answer;
};

const isWinInDiagonal2 = (board) => {
  // diagonal from top right
  let answer = {
    win: false,
    winner: null,
    winCase: ''
  };
  //
  const firstField = board[0][2];
  const secondField = board[1][1];
  const thirdField = board[2][0];
  if (firstField === null) {
    // ako je gore levo polje prazno onda nemam WIN u prvoj dijagonali
  } else {
    if (firstField === secondField && firstField === thirdField) {
      //WIN
      // return true; // Returnujemo odmah WIN, Igra je zavrsena i nema dalji provjera
      //return firstField;
      answer.win = true;
      answer.winner = firstField;
      answer.winCase = "diagonal2"
    }
  }
  return answer;
};


export const isWin = (board) => {
  /*
  if (isWinInAnyRow(board) || isWinInAnyCol(board) || isWinInAnyDiagonal(board)) {
    return true;
  }
  */
  let answer = isWinInAnyRow(board)
  if (answer.win === true) {
    return answer;
  }
  answer = isWinInAnyCol(board)
  if (answer.win === true) {
    return answer;
  }
  answer = isWinInDiagonal1(board)
  if (answer.win === true) {
    return answer;
  }
  answer = isWinInDiagonal2(board)
  if (answer.win === true) {
    return answer
  }
  // ako je doslo dovde znaci nemamo win.
  // return false;
  return answer; // u njemu ce biti answer.win false
};


/*
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
*/