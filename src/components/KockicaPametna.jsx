import { useState } from "react";

const KockicaPametna = () => {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }


  const broj = counter;
  let color = "";
  if (broj > 0 && broj < 4) {
    color = "blue";
  } else if (broj > 3 && broj < 7) {
    color = "yellow";
  } else if (broj > 6 && broj < 10) {
    color = "red";
  } else if (broj > 9) {
    color = "red-hot";
  }

  // <div className="kockica">

  return (
    <div
      className={"pametna kockica " + color}
      onClick={handleClick}
    >
      {counter}
    </div>
  )
};

export default KockicaPametna;