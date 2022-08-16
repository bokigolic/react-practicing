import { useState } from "react";


let counter = 0;
const makeNewId = () => {
  counter++;
  return counter;
};


const CreateExample = () => {

  /*
  const primer = [
    {
      id: 1,
      zadatak: '',
      completed: false
    }
  ]
  */

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




  return (
    <div>
      <h1>Create example</h1>

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
export default CreateExample;