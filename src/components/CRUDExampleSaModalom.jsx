import { useState } from "react";
import { useDispatch } from "react-redux";
import CRUDExampleModalEditForm from "./CRUDExampleModalEditForm";


let counter = 0;
const makeNewId = () => {
  counter++;
  return counter;
};


const CRUDExampleSaModalom = () => {
  const dispatch = useDispatch();

  const preset = {
    completed: false,
    task: ""
  };

  // OVO IZNAD JE ZA NIZ ITEMA
  // -------------------------------
  // OVO ISPOD JE ZA FORMU

  const [formState, setFormState] = useState({ ...preset });

  const handleChange = (e) => {
    // univerzalni handleChange za sve forme, radi i za checboxove
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const [todo, setTodo] = useState([]); // LISTA TODOS

  // -------------------------------------
  // CRUD

  const createTodo = () => {
    const newItem = {
      ...formState,
      id: makeNewId()
    }
    const uppdatedTodo = [...todo, newItem];
    setTodo(uppdatedTodo);
    // nakon dodavanja u listu onog sto smo ukucal iu formu, briemo formu
    setFormState({ ...preset });

  }

  const deleteItem = (idZaBrisanje) => {
    const updatedTodo = todo.filter((x) => {
      if (x.id === idZaBrisanje) {
        return false
      }
      return true
    });
    setTodo(updatedTodo);
  };


  const editItem = (editingItem) => {
    // edit posredstvom modala
    // u ovom primeru mu saljemo ceo x (i tu je sve i id i task i completed)

    // KORAK PRIPREMA CALLBACKA kojeg ce modal pozvati kad obavi edit
    const cbSaveEdited = (editedItem)=>{
      console.log('modal pozvao callback i vratio izmene', editedItem);
      // KORAK 3 sad to sto je modal vratio moramo da upisemo  ustate ove komponente

      // UPDATE operacija
      const updatedTodo = todo.map((x)=>{
        if (x.id === editedItem.id){
          // to je taj kojeg treba izmeniti
          const updatedItem = {
            ...x, 
            ...editedItem
          };
          return updatedItem;
        };
        // svi ostali ostaju neizmenjeni
        return x;
      });
      setTodo(updatedTodo)
    };

    // KORAK 2 otvaramo modal sa edit formom
    dispatch({
      type: 'MODAL_OPEN',
      payload: (
        <CRUDExampleModalEditForm editingItem={editingItem} cbSaveEdited={cbSaveEdited} />
      )
    });
  };

  const editItemById = (idZaEdit) => {
    // TODO ovo cemo kasnije
    // edit posredstvom modala
    // KORAK 1) selectovati taj item sa tim IDom
    // READ operacija
    let tajItem = false;
    let selected = [];
    todo.forEach((x) => {
      if (x.id === idZaEdit) {

      };
    })
  };


  const handleTestModal = (e) => {
    dispatch({
      type: 'MODAL_OPEN',
      payload: (
        <div>Neka kompnenta da testiramo modal</div>
      )
    });
  };


  return (
    <div>
      <h1>CRUD example sa modalom</h1>

      <button onClick={handleTestModal}>TEST MODAL</button>

      <h2>To Do List</h2>
      {
        todo.map((x, index) => {
          // each
          let id = x.id;
          let ovoJeIDOdOveJedneKartice = x.id;
          let porukaCompleted = '';
          if (x.completed) {
            porukaCompleted = '(COMPLETED)'
          }
          return (
            <div key={x.id}>{x.task} {porukaCompleted}
              <button onClick={() => {
                editItem(x)
              }}>Edit</button>
              <button onClick={() => {
                deleteItem(x.id)
              }}>Delete</button>
            </div>
          )
        })
      }

      <form>
        <h2>Add new todo</h2>
        <input
          type="checkbox"
          name="completed"
          value={formState.completed}
          onChange={handleChange}
        />
        <label>Task</label>
        <input
          type="text"
          name="task"
          value={formState.task}
          onChange={handleChange}
        />
        <button type="button" onClick={createTodo}>Add new ToDo</button>
      </form>
    </div>

  )
};

export default CRUDExampleSaModalom;