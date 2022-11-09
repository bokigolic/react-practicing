import { useState } from "react";
import TicTacToeField from "./TicTacToeField";

const TicTacToe = () => {

  const initialBoard = [
    [null, null, null],
    ['X', 'O', null],
    [null, null, null]
  ];

  const [board, setBoard] = useState(initialBoard)

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="tic-tac-toe-board">
        <TicTacToeField row={0} col={0} board={board} />
        <TicTacToeField row={0} col={1} board={board} />
        <TicTacToeField row={0} col={2} board={board} />

        <TicTacToeField row={1} col={0} board={board} />
        <TicTacToeField row={1} col={1} board={board} />
        <TicTacToeField row={1} col={2} board={board} />

        <TicTacToeField row={2} col={0} board={board} />
        <TicTacToeField row={2} col={1} board={board} />
        <TicTacToeField row={2} col={2} board={board} />
      </div>
    </div>
  )
};
export default TicTacToe;