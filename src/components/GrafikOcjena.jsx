import { izracunajProsecnuOcenu } from "../utils/ocene-utils";

const GrafikOcjena = () => {

  let ocjene = [1, 2, 5, 3, 4];

  let prosjekPredmeta = izracunajProsecnuOcenu(ocjene);

  let visinaProsjekaPredmeta = prosjekPredmeta * 20;

  let jsxNiz = ocjene.map((ocjena) => {
    let visina = ocjena * 20;
    return (
      <div
        className="jedna-ocjena"
        style={{
          marginBottom: visina
        }}
      >{ocjena}</div>
    )
  });


  return (
    <>
      <h4>Grafik Ocjena</h4>

      <div className="grafik-ocjene">

        <div className="jedan-predmet">
          {jsxNiz}
          <div
            className="prosjek-predmeta"
            style={{
              height: visinaProsjekaPredmeta
            }}
          >
          </div>
          <div className="predmet-naslov">naslov</div>
        </div>

        <div className="jedan-predmet">
          {jsxNiz}
          <div
            className="prosjek-predmeta"
            style={{
              height: visinaProsjekaPredmeta
            }}
          >
          </div>
          <div className="predmet-naslov">naslov</div>
        </div>



      </div>
    </>
  )
};

export default GrafikOcjena;