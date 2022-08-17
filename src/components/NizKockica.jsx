import KockicaGlupa from "./KockicaGlupa";

const NizKockica = (props) => {
  const niz = props.niz;

  return (
    <div className="niz-kockica">

      {
        niz.map((broj, index)=>{
          return (
            <KockicaGlupa key={index} broj={broj} />
          )
        })
      }

    </div>
  )
};

export default NizKockica;