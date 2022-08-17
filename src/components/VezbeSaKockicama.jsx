import Kockica from "./Kockica";
import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";

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
    </div>
  )
};

export default VezbeSaKockicama;