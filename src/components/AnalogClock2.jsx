import { useEffect, useState } from "react";


let intervalId2 = false;

const AnalogClock2 = () => {

  // const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0
  });

  const tick = () => {
    // jedan otkucaj, treba neko da ga pozove svakih jednu sekundu
    // console.log('tick');
    // setSeconds(seconds + 1);
    setTime((oldState) => {
      if (oldState.seconds === 59) {
        return {
          seconds: 0,
          minutes: oldState.minutes + 1
        };
      }
      // return oldState + 1;
      return {
        ...oldState, // minutes se ne menjaju
        seconds: oldState.seconds + 1
      };
    });
  }

  const seconds = time.seconds;
  const minutes = time.minutes;

  useEffect(() => {
    // ovo ce biti pozvano samo jednog kad se komponenta pojavi na ekranu
    if (intervalId2) {
      // vec otkucava interval
    } else {
      intervalId2 = setInterval(tick, 1000);
    }
    return () => {
      /*
      // ovo ce biti pozvano na component unmount, kad se komponenta brise sa ekrana
      console.log('brisemo interval', intervalId2);
      clearInterval(intervalId2);
      */
    };
  }, [tick, intervalId2]);

  // const ugao = (seconds / 60) * 360;
  const ugao = parseInt((seconds / 60) * 360); // ugao za sekundu
  const ugaoZaMinut = parseInt((minutes / 60) * 360);

  let sezdesetCrtica = [];
  for (let i = 1; i <= 60; i++) {
    let ugao = (i / 60) * 360;
    sezdesetCrtica.push((
      <div
        key={i}
        className="nosac-kazaljke"
        style={{
          transform: 'rotate(' + ugao + 'deg)'
        }}
      >
        <div className="crtica"></div>
      </div>
    ));
  }

  const handleReset = () => {
    setTime({
      seconds: 0,
      minutes: 0
    });
  };

  return (
    <div className="analog-clock">
      <div className="krug">
        {sezdesetCrtica}

        <div
          className="nosac-kazaljke"
          style={{
            transform: 'rotate(' + ugaoZaMinut + 'deg)'
          }}
        >
          <div className="kazaljka-minutara"></div>
        </div>

        <div
          className="nosac-kazaljke"
          style={{
            transform: 'rotate(' + ugao + 'deg)'
          }}
        >
          <div className="kazaljka"></div>
        </div>

      </div>

      <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
};

export default AnalogClock2;