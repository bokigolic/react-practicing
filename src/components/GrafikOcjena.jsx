import { izracunajProsecnuOcenu } from "../utils/ocene-utils";

const GrafikOcjena = (props) => {
  const sveOcjene = props.ocene;

  let prosecneOceneIzSvihPredmeta = [];
  let jsxPredmeti = [];

  let spisakPredmeta = Object.keys(sveOcjene);
  spisakPredmeta.forEach((predmet) => {
    // let oceneIzPredmeta = [1, 0, 2, 5, 3, 4];
    const oceneIzPredmeta = sveOcjene[predmet];
    const prosjekPredmeta = izracunajProsecnuOcenu(oceneIzPredmeta);
    prosecneOceneIzSvihPredmeta.push(prosjekPredmeta);
    const visinaProsjekaPredmeta = prosjekPredmeta * 20;
    let jsxNiz = oceneIzPredmeta.map((ocjena) => {
      let visina = ocjena * 20;
      return (
        <div
          className="jedna-ocjena"
          style={{
            marginBottom: visina + 'px'
          }}
        >{ocjena}</div>
      )
    });

    jsxPredmeti.push(
      <div className="jedan-predmet">
        <div
          className="prosjek-predmeta"
          style={{
            height: visinaProsjekaPredmeta + 'px'
          }}
        >
        </div>
        <div className="predmet-naslov">{predmet}</div>
        {jsxNiz}
      </div>
    );

  });


  const glavnaProsecnaOcena = izracunajProsecnuOcenu(prosecneOceneIzSvihPredmeta)

  const visinaProsjeka = glavnaProsecnaOcena * 20;

  return (
    <>
      <h4>Grafik Ocjena</h4>

      <div className="grafik-ocjene">

        <div
          className="prosjek-svih"
          style={{
            height: visinaProsjeka + 'px'
          }}
        >
          <div className="prosjek-naslov">Prosjek: {glavnaProsecnaOcena}</div>
        </div>


        {jsxPredmeti}


      </div>
    </>
  )
};

export default GrafikOcjena;