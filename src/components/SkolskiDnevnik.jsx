import { useState } from "react";

const SkolskiDnevnik = () => {

  const initialOcene = {
    biologija: [3],
    matematika: [2],
    srpski: [4, 5, 1],
    istorija: [1],
    geografija: [2, 4]
  };

  // ocene.matematika // Dot notation
  // ocene['matematika'] // Brackets notation

  const [ocene, setOcene] = useState(initialOcene);

  return (
    <div className="skolski-dnevnik">
      <h1>Skolski Dnevnik</h1>
      <h2>Predmeti: </h2>
      {
        Object.keys(ocene).map((predmet) => {
          const oceneIzTogPredmeta = ocene[predmet];
          const oceneZaIspis = oceneIzTogPredmeta.join(', ')
          return (
            <div>
              <h4>{predmet}</h4>
              <p>Ocene: {oceneZaIspis}</p>
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


      <h2>Prosecna ocena: </h2>
    </div>

  )
};
export default SkolskiDnevnik;