import { useState } from "react";


// utils
const izracunajProsecnuOcenu = (nizOcena) => {
  let brojac = 0;
  let zbir = 0;
  nizOcena.forEach((ocena) => {
    brojac++;
    zbir += ocena;
  });
  if (brojac === 0) {
    // ne sme da se deli sa nolom
    return 0;
  }
  const prosek = zbir / brojac; // prosek decfimalni broj na priemr 3.25
  const prosecnaOcena = Math.round(prosek); // prosecna ocena na primer 3
  return prosecnaOcena;
};

const daLiJePao = (nizOcena) => {
  let pao = false; //prosao a polse toga moze sam oda padne
  nizOcena.forEach((ocena) => {
    if (ocena === 1) {
      // ako ima bar jednu jedinicu pao je bez obzira na ostale ocene
      pao = true;
    }
    if (ocena === 0) {
      // ako je neocenjen iz nekog predmeta takodje pada
      pao = true;
    }
  });
  return pao;
};



// komponenta
const SkolskiDnevnik = () => {

  const initialOcene = {
    biologija: [],
    matematika: [],
    srpski: [],
    istorija: [],
    geografija: []
  };

  // ocene.matematika // Dot notation
  // ocene['matematika'] // Brackets notation
  // ocene[predmet] // gde je predmet promenjiva kojia sadrzi 'matematika'

  const [ocene, setOcene] = useState(initialOcene);
  const [zakljuceno, setZakljuceno] = useState(false);

  const handlerZakljuci = (e) => {
    // za oceak sam oneka upise zakljuceno=true
    setZakljuceno(true)
    // a onda cemo napraviti da moraju da budu i neki preduslovi za zakljucenje...
  }

  const dajOcenu = (predmet, ocena) => {
    console.log("Daj ocenu: ", predmet, ocena);
    const updatedOcene = {
      ...ocene,
      [predmet]: [...ocene[predmet], ocena]
    };
    setOcene(updatedOcene);
  };

  let prosecneOceneIzSvihPredmeta = [];
  let spisakPredmeta = Object.keys(ocene);
  spisakPredmeta.forEach((predmet) => {
    const oceneIzTogPredmeta = ocene[predmet];
    const prosecnaOcena = izracunajProsecnuOcenu(oceneIzTogPredmeta);
    prosecneOceneIzSvihPredmeta.push(prosecnaOcena);
  });

  const glavnaProsecnaOcena = izracunajProsecnuOcenu(prosecneOceneIzSvihPredmeta)

  let pao = daLiJePao(prosecneOceneIzSvihPredmeta);


  return (
    <div className="skolski-dnevnik">
      <h1>Skolski Dnevnik</h1>
      <h2>Predmeti: </h2>
      {
        Object.keys(ocene).map((predmet) => {
          const oceneIzTogPredmeta = ocene[predmet];
          const oceneZaIspis = oceneIzTogPredmeta.join(', ');
          const prosecnaOcena = izracunajProsecnuOcenu(oceneIzTogPredmeta);
          return (
            <div key={predmet}>
              <h4>{predmet}</h4>
              <p>Ocene: {oceneZaIspis} - prosečna: {prosecnaOcena}</p>
              <div>
                Daj ocenu: <button onClick={() => { dajOcenu(predmet, 1) }}>1</button>
                <button onClick={() => { dajOcenu(predmet, 2) }}>2</button>
                <button onClick={() => { dajOcenu(predmet, 3) }}>3</button>
                <button onClick={() => { dajOcenu(predmet, 4) }}>4</button>
                <button onClick={() => { dajOcenu(predmet, 5) }}>5</button>
              </div>
            </div>
          )
        })
      }


      <h2>Prosecna ocena iz svih predmeta: <b>{glavnaProsecnaOcena}</b></h2>

      {
        pao ? (
          <div>Pao (iz jednog predmeta imate jedinicu ili neocenjen predmet)!</div>
        ) : (
          <div>Prolazna ocena :) Cestitamo!</div>
        )
      }

      {
        zakljuceno ? (
          <div> Zakljuceno</div>
        ) : (
          <button onClick={handlerZakljuci}>Zakljuci</button>
        )
      }

    </div>

  )
};
export default SkolskiDnevnik;