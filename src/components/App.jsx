import '../scss/style.scss';
import AddContactForm from './AddContactForm';
import AddContactForm2 from './AddContactForm2';
import AddContactForm3 from './AddContactForm3';
import CommentList from './CommentList';
import TabelarFormList from './TabelarFormList';

const App = () => {
  return (
    <div className="wrapper">
      App
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
  );
}

export default App;