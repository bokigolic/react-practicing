import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";
import KockicaZaBojanku from "./KockicaZaBojanku";

const NizKockica = (props) => {
  const niz = props.niz;

  return (
    <div className="niz-kockica">

      {
        niz.map((broj, index) => {
          if (props.tip === 'PAMETNA') {
            // pametne
            return (
              <KockicaPametna key={index} broj={broj} />
            )
          } else if (props.tip === 'BOCKALICA') {
            // kockice za bojenje
            return (
              <KockicaZaBojanku key={index} bojankaColor={props.bojankaColor}/>
            );
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