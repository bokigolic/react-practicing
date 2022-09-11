import { useState } from "react";



/*
CILJEVI
- komponente za prikaz gde ce nam biti ispisani svi spratovi i svako parking mesto kao kockica.
- ako nije parkiran kockica ce biti prazna
- ako je parkiran bice marak automobila i broj tablica
- ako je ceo sprat zauzte bice u to mprikazu oznaceno da je sav popunjen.

- imacem odole widget gde se pojavljuje novi automobil koji hoce da se parkira
i formu gde biramo sprat i parking mesto gde hocem oda parkiramo
- ako je mesto prazno upisace taj automobil u tu mesto.
- ako je mesto zauzeto iskocice poruka da je to parking nmesto zauzeto

- u buducim verzijama cemo zakomplikovati i stavicemo da pored automobila upisuje i vreme kad je parkirao
- a u kockicama ce onima koji su duze vreme parkiran ida se menja boja kockice. na primer cim se parkira bude zeleno a posle nekog vremena narndzasta pa crvena...

*/


const ParkingGaraza = () => {

  const initialState = {
    sprat1: {
      podSpratA: [null, null, null, null, null, null, null, null, null, null],
      podSpratB: [null, null, null, null, null, null, null, null, null, null],
    },
    sprat2: {
      podSpratA: [null, null, null, null, null, null, null, null, null, null],
      podSpratB: [null, null, null, null, null, null, null, null, null, null],

    },
    sprat3: {
      podSpratA: [null, null, null, null, null, null, null, null, null, null],
      podSpratB: [null, null, null, null, null, null, null, null, null, null],
    },
    sprat4: {
      podSpratA: [null, null, null, null, null, null, null, null, null, null],
      podSpratB: [null, null, null, null, null, null, null, null, null, null],
    }
  };

  const [garaza, setGaraza] = useState(initialState);

  return (
    <div>
      <h1>Parking Garaza</h1>
      <p>Prikaz parking mjesta u trznom centru</p>

      <h3>Monitor garaze</h3>

      <h3>Widget za parkiranje novog vozila</h3>

    </div>
  )
};

export default ParkingGaraza;