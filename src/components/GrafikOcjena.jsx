import { izracunajProsecnuOcenu } from "../utils/ocene-utils";

const GrafikOcjena = () => {



  let ocjene = [1, 0, 2, 5, 3, 4];

  const prosjekPredmeta = izracunajProsecnuOcenu(ocjene);

  const visinaProsjekaPredmeta = prosjekPredmeta * 20;

  let jsxNiz = ocjene.map((ocjena) => {
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

  const prosjek = 4;
  const visinaProsjeka = prosjek * 20;

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
          <div className="prosjek-naslov">Prosjek: {prosjek}</div>
        </div>

        <div className="jedan-predmet">
          <div
            className="prosjek-predmeta"
            style={{
              height: visinaProsjekaPredmeta + 'px'
            }}
          >
          </div>
          <div className="predmet-naslov">naslov</div>
          {jsxNiz}
        </div>

        <div className="jedan-predmet">
          <div
            className="prosjek-predmeta"
            style={{
              height: visinaProsjekaPredmeta + 'px'
            }}
          >
          </div>
          <div className="predmet-naslov">naslov</div>
          {jsxNiz}
        </div>



      </div>
    </>
  )
};

export default GrafikOcjena;