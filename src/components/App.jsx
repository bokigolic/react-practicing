import '../scss/style.scss';
import AddContactForm from './AddContactForm';
import AddContactForm2 from './AddContactForm2';
import AddContactForm3 from './AddContactForm3';
import CommentList from './CommentList';

const App = () => {
  return (
    <div className="wrapper">
      App
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