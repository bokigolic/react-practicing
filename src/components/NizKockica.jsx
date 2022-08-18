import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";

const NizKockica = (props) => {
  const niz = props.niz;

  return (
    <div className="niz-kockica">

      {
        niz.map((broj, index)=>{
          if (props.pametne) {
            // pametne
            return (
              <KockicaPametna key={index} broj={broj} />
            )
          } else {
            // glupe
            return (
              <KockicaGlupa key={index} broj={broj} />
            )
          }
        })
      }

    </div>
  )
};

export default NizKockica;

/*
      {
        niz.map((broj, index)=>{
          return (
            <KockicaGlupa key={index} broj={broj} />
          )
        })
      }
*/