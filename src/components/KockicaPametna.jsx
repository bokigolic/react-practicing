import { useState } from "react";

const KockicaPametna = () => {

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  }


  const broj = counter;
  let color = "";
  if (broj > 0 && broj < 3) {
    color = "blue";
  } else if (broj > 2 && broj < 5) {
    color = "green";
  } else if (broj > 4 && broj < 7) {
    color = "yellow";
  } else if (broj > 6 && broj < 9) {
    color = "orange";
  } else if (broj > 8 && broj < 11) {
    color = "red";
  } else if (broj > 10) {
    color = "red-hot";
  } else if (broj < 0) {
    color = "purple";
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