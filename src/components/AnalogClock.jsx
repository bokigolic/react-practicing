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
  }, [tick, intervalId]);

  // const ugao = (seconds / 60) * 360;
  const ugao = parseInt((seconds / 60) * 360);

  return (
    <div className="analog-clock">
      <div className="krug">
        <div
          className="nosac-kazaljke"
          style={{
            transform: 'rotate(' + ugao + 'deg)'
          }}
        >
          <div className="kazaljka"></div>
        </div>
      </div>
    </div>
  )
};

export default AnalogClock;