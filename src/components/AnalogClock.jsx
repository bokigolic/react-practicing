import { useState } from "react";

const AnalogClock = () => {

  const [seconds, setSeconds] = useState(8);

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