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

- kod parking mesta moze mali X button koji brise automobil sa aprking mesta

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

  const preset = {
    automobil: "",
    sprat: "sprat1",
    podsprat: "podSpratA",
    brojmesta: "0"
  };

  const [formState, setFormState] = useState(preset);

  const handleChange = (e) => {
    // univerzalni handleChange za sve forme, radi i za checboxove
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  };


  const handleParkiraj = () => {
    console.log('Parkiraj...', formState.automobil, formState.sprat, formState.podsprat, formState.brojmesta);

    // provera da li je parking mesto prazno
    if (garaza[formState.sprat][formState.podsprat][parseInt(formState.brojmesta)] === null) {
      // mesto je prazno
      console.log('slobodno :)');
      // upisujem ou state na principou da prvo napravimo kao izgleda novi state
      const updatedGaraza = {
        ...garaza
      };
      updatedGaraza[formState.sprat][formState.podsprat][parseInt(formState.brojmesta)] = formState.automobil; // sad u novoj garazi updateujem osamo na odabranom spratu, odabranom podspratu, podabranoj poziciji samo taj item 
      // sad upisujemo pripremljeni state u pravi satte garaze
      setGaraza(updatedGaraza);
    } else {
      // mesto je popunjeno
      window.alert('Odabrano parking mesto je zauzeto!')
    }
  };


  const handleMakeNewCar = () => {
    // ova funkcija kreira slucajni automobil marku i broj tablica
    const nizMarki = ['Audi', "BMW", "Kia", "Opel", "VW"];
    const marka = nizMarki[Math.floor(Math.random() * nizMarki.length)];
    const tabliceInteger = Math.floor(Math.random() * 9999);
    const tablice = ('AAAA' + tabliceInteger).slice(-4);
    const automobil = marka + ' ' + tablice;
    // upisujemo novi automobil u form uu polje automobil
    setFormState({
      ...formState,
      automobil: automobil
    })
  };


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

      <button onClick={handleMakeNewCar}>Neka se pojavi novi automobil</button>
      <br />
      <br />

      <form>
        <div>
          <label>Automobil </label>
          <input
            type='text'
            name='automobil'
            value={formState.automobil}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="sprat"
            value={formState.sprat}
            onChange={handleChange}
          >
            <option value="sprat1">Sprat 1</option>
            <option value="sprat2">Sprat 2</option>
            <option value="sprat3">Sprat 3</option>
            <option value="sprat4">Sprat 4</option>
          </select>
          <select
            name="podsprat"
            value={formState.podsprat}
            onChange={handleChange}
          >
            <option value="podSpratA">A</option>
            <option value="podSpratB">B</option>
          </select>
          <select
            name="brojmesta"
            value={formState.brojmesta}
            onChange={handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <button type="button" onClick={handleParkiraj}>Parkiraj</button>
      </form>

    </div>
  )
};

export default ParkingGaraza;