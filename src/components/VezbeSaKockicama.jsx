import Kockica from "./Kockica";
import KockicaGlupa from "./KockicaGlupa";
import KockicaPametna from "./KockicaPametna";
import MatrixKockica from "./MatrixKockica";
import MnogoKockica from "./MnogoKockica";
import NizKockica from "./NizKockica";

const VezbeSaKockicama = () => {
  return (
    <div>
      <h1>Vežbe sa kockicama</h1>
      <Kockica />
      <Kockica />
      <Kockica />
      <KockicaPametna />
      <KockicaPametna />
      <KockicaPametna />
      <KockicaGlupa broj={-5} />
      <KockicaGlupa broj={1} />
      <KockicaGlupa broj={3} />
      <KockicaGlupa broj={5} />
      <KockicaGlupa broj={7} />
      <KockicaGlupa broj={9} />
      <KockicaGlupa broj={11} />
      <KockicaGlupa />
      <NizKockica niz={[4, 5, 8]} />
      <NizKockica niz={[1, 5, 9, 10, 12, 3]} />
      <NizKockica niz={[]} />
      <NizKockica niz={[1, 1]} pametne />
      <MnogoKockica koliko={10} saBrojem={2} pametne />
      <MnogoKockica koliko={13} saBrojem={4} />
      <MatrixKockica kolikoRedova={3} kolikoKolona={4} saBrojem={5} />
      <MatrixKockica kolikoRedova={4} kolikoKolona={2} saBrojem={7} />
      <MatrixKockica kolikoRedova={5} kolikoKolona={5} saBrojem={1} pametne />
      <MatrixKockica kolikoRedova={1} kolikoKolona={3} saBrojem={11} />
    </div>
  )
};

export default VezbeSaKockicama;