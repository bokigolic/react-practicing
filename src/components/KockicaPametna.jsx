import { useState } from "react";

const KockicaPametna = () => {

  const [counter, setCounter] = useState(0);

  const handleClick = ()=>{
    setCounter(counter+1);
  }

  return (
    <div className='kockica' onClick={handleClick}>
      {counter}
    </div>
  )
};

export default KockicaPametna;