import '../scss/style.scss';
import '../scss/modal.scss';
import AddContactForm from './AddContactForm';
import AddContactForm2 from './AddContactForm2';
import AddContactForm3 from './AddContactForm3';
import CommentList from './CommentList';
import CreateExample from './CreateExample';
import Modal from './Modal';
import TabelarFormList from './TabelarFormList';
import CRUDExampleSaModalom from './CRUDExampleSaModalom';
import VezbeSaKockicama from './VezbeSaKockicama';
import Bojanka from './Bojanka';
import AnalogClock from './AnalogClock';
import AnalogClock2 from './AnalogClock2';

const App = () => {
  return (
    <>
      <div className="wrapper">





        <div className="universal-okvir">
          <AnalogClock2 />
          <AnalogClock />
        </div>
        <div className="universal-okvir">
          <Bojanka kolikoRedova={4} kolikoKolona={4} />
          <Bojanka kolikoRedova={10} kolikoKolona={10} />
        </div>
        <div className="universal-okvir">
          <VezbeSaKockicama />
        </div>
        <div className="universal-okvir">
          <CRUDExampleSaModalom />
        </div>
        <div className="universal-okvir">
          <CreateExample />
        </div>
        <div className="universal-okvir">
          <TabelarFormList />
        </div>
        <div className="universal-okvir">
          <CommentList />
        </div>

        <AddContactForm3 />
        <AddContactForm2 />
        <AddContactForm />
      </div>
      <Modal />
    </>
  );
}

export default App;