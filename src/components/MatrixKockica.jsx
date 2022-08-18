import NizKockica from "./NizKockica";

const MatrixKockica = (props) => {
  const kolikoKolona = props.kolikoKolona;
  const kolikoRedova = props.kolikoRedova;
  const saBrojem = props.saBrojem;

  // niza za jedan red matrixa
  let nizZaJedanRed = [];
  for (let i = 1; i <= kolikoKolona; i++) {
    // za svaku kolonu jedan ciklus
    nizZaJedanRed.push(saBrojem);
  }

  // prvi nacin za prikaz vise redova
  let jsxNizRedova = [];
  for (let ii = 1; ii <= kolikoRedova; ii++) {
    // za svaki red jedan ciklus
    jsxNizRedova.push(<NizKockica key={ii} niz={nizZaJedanRed} pametne={props.pametne} />);
  }
  console.log('test broj redova', jsxNizRedova.length);

  // drugi nacin bi bio da nravimo najpre nizRedova ali ne komponneti nego podtaak. Pa da se u drugom potezu sa .map taj niz transformise u niz komponenti

  return (
    <div className="matrix-kockice">

      {jsxNizRedova}

    </div>
  )
};

export default MatrixKockica;