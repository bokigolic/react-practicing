import { useState } from "react";
import MemoryCardGame from "./MemoryGameCard";

const MemoryGame = () => {

  const initialState = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const [state, setState] = useState(initialState);


  return (
    <div>
      <h2>Memory Game</h2>
      <div className="memory-board">

        {
          state.map((card, index) => {
            return (
             <MemoryCardGame key={index} />
            )
          })
        }
      </div>
    </div>
  )
};
export default MemoryGame;