import { useState } from "react";
import TicTacToeField from "./TicTacToeField";

const TicTacToe = () => {

  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [board, setBoard] = useState(initialBoard)

  const handleReset = () => {
    // setBoard(initialBoard); // postoji mogucnost referencovanja na stari objekat
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  }

  const clickOnField = (row, col) => {
    console.log("click on ", row, col)
    let updatedBoard = [...board]
    updatedBoard[row][col] = 'X';
    setBoard(updatedBoard)
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="tic-tac-toe-board">
        <TicTacToeField row={0} col={0} board={board} clicked={clickOnField} />
        <TicTacToeField row={0} col={1} board={board} clicked={clickOnField} />
        <TicTacToeField row={0} col={2} board={board} clicked={clickOnField} />

        <TicTacToeField row={1} col={0} board={board} clicked={clickOnField} />
        <TicTacToeField row={1} col={1} board={board} clicked={clickOnField} />
        <TicTacToeField row={1} col={2} board={board} clicked={clickOnField} />

        <TicTacToeField row={2} col={0} board={board} clicked={clickOnField} />
        <TicTacToeField row={2} col={1} board={board} clicked={clickOnField} />
        <TicTacToeField row={2} col={2} board={board} clicked={clickOnField} />
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
};
export default TicTacToe;