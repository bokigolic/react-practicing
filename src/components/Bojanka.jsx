import { useState } from "react";
import MatrixKockica from "./MatrixKockica";

const Bojanka = () => {

  const [color, setColor] = useState('blue');

  return (
    <div>
      <h1>Bojanka</h1>

      <h4>izaberi boju</h4>
      <button onClick={() => { setColor("") }}>White</button>
      <button onClick={() => { setColor("blue") }}>Blue</button>
      <button onClick={() => { setColor("green") }}>Green</button>
      <button onClick={() => { setColor("yellow") }}>Yellow</button>
      <button onClick={() => { setColor("orange") }}>Orange</button>
      <button onClick={() => { setColor("red") }}>Red</button>
      <button onClick={() => { setColor("red-hot") }}>Red hot</button>
      <button onClick={() => { setColor("purple") }}>Purple</button>



      <p>Odabrana boja: <b>{color}</b></p>


      <h4>Crtaj i boji</h4>
      <MatrixKockica
        kolikoRedova={10}
        kolikoKolona={10}
        saBrojem={5}
        bojanka
        bojankaColor={color}
      />

    </div>
  )
};
export default Bojanka;