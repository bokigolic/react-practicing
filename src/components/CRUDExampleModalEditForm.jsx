import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CRUDExampleModalEditForm = (props) => {
  const dispatch = useDispatch();

  const x = props.editingItem;
  const cbSaveEdited = props.cbSaveEdited;

  const [formState, setFormState] = useState({ ...x });

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

  const handleSave = ()=>{
    console.log('ovo cemo da sacuvamo', formState);
    // pozivamo callback
    cbSaveEdited(formState);
    // nakon sto je pozvao callback modal je odradio svoju scrhu i treba da se zatvori
    // zatvaramo modal
    dispatch({
      type: 'MODAL_CLOSE'
    });
  };

  return (
    <div className="edit-form">
      <h3>Edit unutar modala</h3>
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
        <button type="button" onClick={handleSave}>Save changes</button>
    </div>
  )
};
export default CRUDExampleModalEditForm;