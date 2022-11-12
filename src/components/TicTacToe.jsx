import { useState } from "react";
import { isAllFieldsFiled, isTicTacToeFinished, isWin } from "../utils/tic-tac-toe-utils";
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
  const [winner, setWinner] = useState(null);
  const [winCase, setWinCase] = useState("");

  const handleReset = () => {
    // setBoard(initialBoard); // postoji mogucnost referencovanja na stari objekat
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setCurrentPlayer("X")
    setFinished(false)
    setWinner(null)
    setWinCase("")
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
      // if (isTicTacToeFinished(board)) {
      const answer = isWin(board)
      const win = answer.win;
      const winner = answer.winner;
      const winCase = answer.winCase;
      if (win === true) {
        // WIN
        setFinished(true)
        setWinner(winner)
        setWinCase(winCase)
      } else {
        // no win
        if (isAllFieldsFiled(board)) {
          setFinished(true)
          setWinner(null) // No winner - DRAW
          setWinCase('')
        } else {
          setFinished(false)
        }
      }

    } else {
      // game is finished so we ignoring clicks
      // do nothing
    }
  }


  let winJsx = null;
  if (finished === true) {
    if (winner === null) {
      winJsx = (
        <p>Draw!</p>
      );
    } else {
      winJsx = (
        <p>Winner is {winner}!!!</p>
      );
    }
  }

  let winLineJsx = null;
  if(winCase !== ""){
    winLineJsx=(
      <div className={"win-line " + winCase}></div>
    )
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Player {currentPlayer} please make a move</p>
      {
        finished ? 'Game is finished!' : ''
      }
      {winJsx}
      <div className="tic-tac-toe-board">
        {winLineJsx}

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