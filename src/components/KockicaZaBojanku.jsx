
/*
ovo je kockica za bojenej u bojanki.
nece prikazivati nikakv broj nego samo boju

- mora da bude klikabilna

- mora uvek da prima odabranu boju
- na klik sama sebe oboji sa odabranom bojom

*/

import { useState } from "react";


const KockicaZaBojanku = (props) => {

  const odabranaBoja = props.bojankaColor;

  const [color, setColor] = useState('');

  const handleClick = () => {
    // kad se klikne sama sebe oboji u doabranu boju
    setColor(odabranaBoja);
  };


  return (
    <div
      className={"kockica-bojanka kockica " + color}
      onClick={handleClick}
    >

    </div>
  );
};

export default KockicaZaBojanku;