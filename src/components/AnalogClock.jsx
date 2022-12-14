import { useEffect, useState } from "react";


let intervalId = false;

const AnalogClock = () => {

  const [seconds, setSeconds] = useState(0);

  const tick = () => {
    // jedan otkucaj, treba neko da ga pozove svakih jednu sekundu
    // console.log('tick');
    // setSeconds(seconds + 1);
    setSeconds((oldState) => {
      if (oldState === 59) {
        return 0;
      }
      return oldState + 1;
    });
  }

  useEffect(() => {
    // ovo ce biti pozvano samo jednog kad se komponenta pojavi na ekranu
    if (intervalId) {
      // vec otkucava interval
    } else {
      intervalId = setInterval(tick, 1000);
    }
    return () => {
      /*
      // ovo ce biti pozvano na component unmount, kad se komponenta brise sa ekrana
      console.log('brisemo interval', intervalId);
      clearInterval(intervalId);
      */
    };
  }, [tick, intervalId]);

  // const ugao = (seconds / 60) * 360;
  const ugao = parseInt((seconds / 60) * 360);

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

  const handleReset = ()=>{
    setSeconds(0)
  }

  return (
    <div className="analog-clock">
      <div className="krug">
        {sezdesetCrtica}
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

export default AnalogClock;