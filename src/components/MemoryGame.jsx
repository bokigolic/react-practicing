import { useEffect, useState } from "react";
import { getMemoryGameShuffledCards } from "../utils/memory-game-utils";
import MemoryGameCard from "./MemoryGameCard";

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
  const [firstOpenedCardIndex, setFirstOpenedCardIndex] = useState(null);
  const [secondOpenedCardIndex, setSecondOpenedCardIndex] = useState(null);

  useEffect(() => {
    let zavrsena = true;
    state.forEach(card => {
      if (card !== null) {
        zavrsena = false;
      }
    });
    if (zavrsena) {
      window.alert("Igra je zavrsena, klikni restart za novu igru")
    }
  }, [state])

  useEffect(() => {
    if (firstOpenedCardIndex !== null && secondOpenedCardIndex !== null) {
      // dve su otvorene

      // zatvaramo obe ali malo pricekamo
      setTimeout(() => {
        // provera da li su dve iste
        const firstCard = state[firstOpenedCardIndex];
        const secondCard = state[secondOpenedCardIndex];
        if (firstCard === secondCard) {
          // iste su
          // moramo u state na njihove pozicije upisati null
          const updatedState = state.map((card, index) => {
            if (index === firstOpenedCardIndex || index === secondOpenedCardIndex) {
              return null; // u te dve kartice upisujemo null
            }
            return card; // sve ostale kartice ostaju neizmenjene
          });
          setState(updatedState);
          // kartice sklonjen sa table takodje nisu otvorene pa i njima treba upisati null kako bi opoet bili dozvoljeni klikovi
          setFirstOpenedCardIndex(null);
          setSecondOpenedCardIndex(null);
        } else {
          //nisu iste
          // zatvaramo obe
          setFirstOpenedCardIndex(null);
          setSecondOpenedCardIndex(null);
        }
      }, 1000);
    }

  }, [firstOpenedCardIndex, secondOpenedCardIndex]);


  const handleRestart = () => {
    // upisujej u state novi niz od 16 izmesanih karata
    const svezeIzmesanihSesnaestKatara = getMemoryGameShuffledCards();
    setState(svezeIzmesanihSesnaestKatara)
  }

  const clickOnCard = (index) => {
    console.log("Click on memory card", index);
    // 1)najpre provera da l ije vec otvorena prva kartica
    if (firstOpenedCardIndex === null) {
      // prva niej otovreno
      // otvarmo je sad
      setFirstOpenedCardIndex(index)
    } else {
      // 2) provervamo da li je druga zatvorena
      if (secondOpenedCardIndex === null) {
        // prva krtica je vec otvorena ali druha je zatvorena
        // otvaramo sad drugu
        setSecondOpenedCardIndex(index)
      }
    }
  }

  return (
    <div>
      <h2>Memory Game</h2>
      <div className="memory-board">

        {
          // crtanje svih kartica
          state.map((card, index) => {
            let isOpened = false;
            if (index === firstOpenedCardIndex || index === secondOpenedCardIndex) {
              isOpened = true;
            }
            return (
              <MemoryGameCard key={index} card={card} index={index} isOpened={isOpened} clickOnCard={clickOnCard} />
            )
          })
        }

        <button onClick={handleRestart}>Reset</button>
      </div>
    </div>
  )
};
export default MemoryGame;