import { useState } from "react";
import ParkingGarazaPodSprat from "../scss/ParkingGarazaPodSprat";



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
      podSpratA: [null, null, 'test 123', null, null, null, null, null, null, null],
      podSpratB: ['BMW 234', null, null, null, null, null, null, null, null, null],
    },
    sprat2: {
      podSpratA: ['Audi 123', null, null, null, null, null, null, null, null, null],
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
      <div className="monitor-garaze">
        <div className="sprat">
          <header>Sprat 1</header>
          <footer>
            <ParkingGarazaPodSprat
              sprat={"sprat1"}
              podSprat={"podSpratA"}
              mesta={garaza.sprat1.podSpratA}
            />
            <ParkingGarazaPodSprat
              sprat={"sprat1"}
              podSprat={"podSpratB"}
              mesta={garaza.sprat1.podSpratB}
            />
          </footer>
        </div>
        <div className="sprat">
          <header>Sprat 2</header>
          <footer>
            <ParkingGarazaPodSprat
              sprat={"sprat2"}
              podSprat={"podSpratA"}
              mesta={garaza.sprat2.podSpratA}
            />
            <ParkingGarazaPodSprat
              sprat={"sprat2"}
              podSprat={"podSpratB"}
              mesta={garaza.sprat2.podSpratB}
            />
          </footer>
        </div>
        <div className="sprat">
          <header>Sprat 3</header>
          <footer>
            <ParkingGarazaPodSprat
              sprat={"sprat3"}
              podSprat={"podSpratA"}
              mesta={garaza.sprat3.podSpratA}
            />
            <ParkingGarazaPodSprat
              sprat={"sprat3"}
              podSprat={"podSpratB"}
              mesta={garaza.sprat3.podSpratB}
            />
          </footer>
        </div>
        <div className="sprat">
          <header>Sprat 4</header>
          <footer>
            <ParkingGarazaPodSprat
              sprat={"sprat4"}
              podSprat={"podSpratA"}
              mesta={garaza.sprat4.podSpratA}
            />
            <ParkingGarazaPodSprat
              sprat={"sprat4"}
              podSprat={"podSpratB"}
              mesta={garaza.sprat4.podSpratB}
            />
          </footer>
        </div>

      </div>

      <h3>Widget za parkiranje novog vozila</h3>

    </div>
  )
};

export default ParkingGaraza;