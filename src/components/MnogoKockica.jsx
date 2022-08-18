import NizKockica from "./NizKockica";


//da mu zadamo broj kockica i on napravi toliko

const MnogoKockica = (props) => {
  const koliko = props.koliko;
  const saBrojem = props.saBrojem;

  let niz = [];
  for (let i = 1; i <= koliko; i++) {
    // niz.push(1);
    niz.push(saBrojem);
  }

  console.log(niz); // niz brojeva


  return (
    <div className='mnogo-kockice'>

      <NizKockica niz={niz} pametne={props.pametne} />

    </div>
  )
};

export default MnogoKockica;