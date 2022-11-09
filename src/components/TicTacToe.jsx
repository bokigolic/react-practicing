import { useState } from "react";
import { isTicTacToeFinished } from "../utils/tic-tac-toe-utils";
import TicTacToeField from "./TicTacToeField";

const TicTacToe = () => {

  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const [board, setBoard] = useState(initialBoard)
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [finished, setFinished] = useState(false)

  const handleReset = () => {
    // setBoard(initialBoard); // postoji mogucnost referencovanja na stari objekat
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setCurrentPlayer("X")
    setFinished(false)
  }

  const clickOnField = (row, col) => {
    console.log("click on ", row, col)
    if (finished === false) {
      let updatedBoard = [...board]
      updatedBoard[row][col] = currentPlayer;
      setBoard(updatedBoard)
      // after move, change player
      if (currentPlayer === "X") {
        setCurrentPlayer("O")
      } else {
        setCurrentPlayer("X")
      }
      // TODO sad moramo proveriti da li je posle poteza mozda neki igrac pobedio
      // ili da je igra zavrsena na neki drugi nacin
      if (isTicTacToeFinished(board)) {
        setFinished(true)
      } else {
        setFinished(false)
      }
    } else {
      // game is finished
      // do nothing
    }
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Player {currentPlayer} please make a move</p>
      {
        finished ? 'Game is finished!' : ''
      }
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