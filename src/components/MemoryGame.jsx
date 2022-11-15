import { useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
import MemoryCardGame from "./MemoryGameCard";

const MemoryGame = () => {

  const initialState = [
    null,
    null,
    "zeka",
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

  const handleRestart = () => {
    // upisujej u state novi niz od 16 izmesanih karata
    const svezeIzmesanihSesnaestKatara = getMemoryGameShuffledCards();
    setState(svezeIzmesanihSesnaestKatara)
  }

  return (
    <div>
      <h2>Memory Game</h2>
      <div className="memory-board">

        {
          state.map((card, index) => {
            return (
              <MemoryCardGame key={index} card={card} />
            )
          })
        }

        <button onClick={handleRestart}>Reset</button>
      </div>
    </div>
  )
};
export default MemoryGame;