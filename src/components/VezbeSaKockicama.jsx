import Kockica from "./Kockica";
import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";
import MatrixKockica from "./MatrixKockica";
import MnogoKockica from "./MnogoKockica";
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
      <NizKockica niz={[1, 5, 9, 10, 12, 3]} />
      <NizKockica niz={[]} />
      <NizKockica niz={[1, 1]} />
      <MnogoKockica koliko={15} saBrojem={2} />
      <MnogoKockica koliko={13} saBrojem={8} />
      <MatrixKockica kolikoRedova={3} kolikoKolona={4} saBrojem={5} />
      <MatrixKockica kolikoRedova={4} kolikoKolona={2} saBrojem={7} />
      <MatrixKockica kolikoRedova={5} kolikoKolona={5} saBrojem={1} />
    </div>
  )
};

export default VezbeSaKockicama;