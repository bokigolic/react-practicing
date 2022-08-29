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
    biologija: [3],
    matematika: [2],
    srpski: [4, 4, 2, 1],
    istorija: [1],
    geografija: [2, 4]
  };

  // ocene.matematika // Dot notation
  // ocene['matematika'] // Brackets notation

  const [ocene, setOcene] = useState(initialOcene);


  let prosecneOceneIzSvihPredmeta = [];
  Object.keys(ocene).forEach((predmet) => {
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
            <div>
              <h4>{predmet}</h4>
              <p>Ocene: {oceneZaIspis} - prosečna: {prosecnaOcena}</p>
              <div>
                Daj ocenu: <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
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
    </div>

  )
};
export default SkolskiDnevnik;