import Kockica from "./Kockica";
import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";
import NizKockica from "./NizKockica";

const VezbeSaKockicama = () => {
  return (
    <div>
      <Kockica />
      <Kockica />
      <Kockica />
      <KockicaPametna />
      <KockicaPametna />
      <KockicaPametna />
      <KockicaGlupa broj={3} />
      <KockicaGlupa broj={10} />
      <KockicaGlupa />
      <NizKockica niz={[4, 5, 8]} />
      <NizKockica niz={[1, 5, 9, 6, 3]} />
      <NizKockica niz={[]}/>
      <NizKockica niz={[1,1]}/>
    </div>
  )
};

export default VezbeSaKockicama;