import KockicaGlupa from "./KockicaGlupa";

const NizKockica = (props) => {
  const niz = props.niz;

  return (
    <div className="niz-kockica">

      {
        niz.map((broj)=>{
          return (
            <KockicaGlupa key={broj} broj={broj} />
          )
        })
      }

    </div>
  )
};

export default NizKockica;