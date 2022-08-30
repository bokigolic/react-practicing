const GrafikOcjena = () => {

  let ocjene = [1, 2, 5, 3, 4];

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
    <div className="grafik-ocjene">
      <h4>Grafik Ocjena</h4>
      <div className="jedan-predmet">
        {jsxNiz}
      </div>
    </div>
  )
};

export default GrafikOcjena;