import { useEffect, useState } from "react";
import { getMemoryGameShuffledCards, miliSecondsToDisplayFormat, zapocniMerenjeVremena, zavrsiMerenjeVremena } from "../utils/memory-game-utils";
import { miliSecondsToLongTimeWithoutHours } from "../utils/time-utils";
import MemoryGameCard from "./MemoryGameCard";


/*
IDEJE I CILJEVI ZA DALJA UNAPRDJENJA
- unosenje imena igraca
- u tabeli igraca da red bude oznacen (highiught) od igraca koji igra
- obavest po zavrsetku igre ko je pobednik
- pre pocetka igre da bude prikazana "START SCREEN" sa podesavanjima i taster START
- tokom igre da ne budu prikaza podesavanja i da bude taster EXIT TO START SCREEN
*/

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
  const [started, setStarted] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const initialPlayer = {
    name: 'Alpha',
    usedTime: 0,
    score: 0, // nuber of pairs
  }
  const initialPlayer1 = {
    name: 'Bravo',
    usedTime: 0,
    score: 0, // nuber of pairs
  }
  const initialPlayer2 = {
    name: 'Charlie',
    usedTime: 0,
    score: 0, // nuber of pairs
  }
  const initialPlayer3 = {
    name: 'Delta',
    usedTime: 0,
    score: 0, // nuber of pairs
  }
  const [players, setPlayers] = useState([initialPlayer]);
  const [howManyPlayers, setHowManyPlayers] = useState(1)
  const [size, setSize] = useState(16);

  const updatePlayerState = (usedTime, newPoints) => {
    const updatedPlayers = players.map((player, index) => {
      if (currentPlayer === index) {
        // to je igrac koji igra
        const updatedPlayer = {
          ...player,
          usedTime: player.usedTime + usedTime,
          score: player.score + newPoints
        }
        return updatedPlayer
      }
      return player // svi ostali igraci neizmenjeni
    });
    setPlayers(updatedPlayers);
  }

  useEffect(() => {
    if (started === true) {
      let zavrsena = true;
      state.forEach(card => {
        if (card !== null) {
          zavrsena = false;
        }
      });
      if (zavrsena) {
        window.alert("Igra je zavrsena, klikni restart za novu igru")
        setStarted(false) // igra je zavrsena
        // TODO kad je igra zavrsena takodje trebamo zaustaviti merenje vremene
      }
    }
  }, [state])

  useEffect(() => {
    if (firstOpenedCardIndex !== null && secondOpenedCardIndex !== null) {
      // dve su otvorene

      // zatvaramo obe ali malo pricekamo
      setTimeout(() => {
        let newPoints = 0;
        // provera da li su dve iste
        const firstCard = state[firstOpenedCardIndex];
        const secondCard = state[secondOpenedCardIndex];
        if (firstCard === secondCard) {
          // iste su
          newPoints = 1;
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
          // nisu iste
          // zatvaramo obe
          setFirstOpenedCardIndex(null);
          setSecondOpenedCardIndex(null);
        }
        // potez je zavrsen
        // TODO zaustavljamo merenje vremena za igraca i upisemo u state tog igraca
        const usedTime = zavrsiMerenjeVremena();
        updatePlayerState(usedTime, newPoints);
        // za sad podrazumevamo da ima samo jedan igrac...
        // ****NOVO sad za vise igraca
        let nextPlayer = currentPlayer + 1;
        if (players.length <= nextPlayer) {
          // pose lposlednjeg igraca na potezu je opet prvi
          nextPlayer = 0;
        }
        setCurrentPlayer(nextPlayer)
        // TODO zapocinjemo novi ciklus merenje
        zapocniMerenjeVremena();
      }, 1000);
    }

  }, [firstOpenedCardIndex, secondOpenedCardIndex]);


  const handleRestart = () => {
    // upisuje u state novi niz od 16 izmesanih karata
    const svezeIzmesanihSesnaestKatara = getMemoryGameShuffledCards(size);
    setState(svezeIzmesanihSesnaestKatara) // karte su izmesane i poslagane
    // upisujemo igrace
    // const numberOfPlayers = 2;
    if (howManyPlayers === 1) {
      setPlayers([initialPlayer]);
    } else if (howManyPlayers === 2) {
      setPlayers([initialPlayer, initialPlayer1])
    } else if (howManyPlayers === 3) {
      setPlayers([initialPlayer, initialPlayer1, initialPlayer2])
    } else if (howManyPlayers === 4) {
      setPlayers([initialPlayer, initialPlayer1, initialPlayer2, initialPlayer3])
    }
    setStarted(true) // igra je zapoceta
    // TODO zapocinjemo merenje vremena za igraca
    zapocniMerenjeVremena();
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


  // pripremamo od trenutnog igraca
  const currentPlayerData = players[currentPlayer];
  const currentPlayerName = currentPlayerData.name;

  // adaptiramo sirinu table za igru na broj kockica
  let width = 4 * 70; // 4 columns default
  if (size === 36 || size === 24) {
    width = 6 * 70; // 6 columns
  } else if (size === 64) {
    width = 8 * 70; // 8 columns
  } else if (size === 4) {
    width = 2 * 70; // 2 columns
  }

  return (
    <div>
      <h2>Memory Game</h2>
      <p>Player {currentPlayerName} make your move</p>
      <div
        className="memory-board"
        style={{
          width: width + 'px'
        }}
      >

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

      </div>
      <div>
        <br />
        <table className="memory-game-score">
          <thead>
            <tr>
              <th className="text-left">Player name</th>
              <th className="text-right">Time used</th>
              <th className="text-right">Score</th>
            </tr>
          </thead>
          <tbody>

            {
              players.map((player, index) => {
                // const displayTime = miliSecondsToDisplayFormat(player.usedTime)
                const displayTime = miliSecondsToLongTimeWithoutHours(player.usedTime);
                let isCurrentPlayer = false;
                if (index === currentPlayer) {
                  isCurrentPlayer = true;
                }
                return (
                  <tr key={index} className={isCurrentPlayer ? 'highlight' : ''}>
                    <td className="text-left">{player.name}</td>
                    <td className="text-number">{displayTime}</td>
                    <td className="text-number">{player.score}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
      <h4>Choose settings for game</h4>
      <p>
        <label>How many players </label>
        <select
          value={howManyPlayers}
          onChange={(e) => {
            setHowManyPlayers(parseInt(e.target.value))
          }}
        >
          <option value={1}>1 (single-player)</option>
          <option value={2}>2 (multiplayer)</option>
          <option value={3}>3 (multiplayer)</option>
          <option value={4}>4 (multiplayer)</option>
        </select>
      </p>
      <p>
        <label>Board size </label>
        <select
          value={size}
          onChange={(e) => {
            setSize(parseInt(e.target.value))
          }}
        >
          <option value={4}>4 cards (2x2)</option>
          <option value={8}>8 cards (4x2)</option>
          <option value={12}>12 cards (4x3)</option>
          <option value={16}>16 cards (4x4)</option>
          <option value={24}>24 cards (6x4)</option>
          <option value={36}>36 cards (6x6)</option>
          <option value={64}>64 cards (8x8)</option>
        </select>
      </p>
      <p>
        <button onClick={handleRestart}>Reset / Start new game</button>
      </p>
    </div>
  )
};
export default MemoryGame;