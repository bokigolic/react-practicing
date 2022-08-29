import MnogoKockica from "./MnogoKockica";

const GrafikOdKockica = (props) => {

  let jsxNiz = props.niz.map((broj, index) => {
    return (
      <MnogoKockica key={index} koliko={broj} saBrojem={broj} />
    );
  });


  return (
    <div className="grafik-kockica">
      <h3>Grafik od kockica</h3>

      {
        jsxNiz
      }

    </div>
  )
};

export default GrafikOdKockica;
