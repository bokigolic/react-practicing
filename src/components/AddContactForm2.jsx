import { useState } from "react";

const AddContactForm2 = () => {

  const preset = {
    nickname: "",
    email: "",
    favorite: false,
  };

  const [state, setState] = useState(preset);
  const [phoneArr, setPhoneArr] = useState([]); // array of states
  const [newPhone, setNewPhone] = useState('');

  const handleChange = (e) => {
    // univerzalni handleChange za sve forme, radi i za checboxove
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleChangeNewPhone = (e)=> {
    const newPhoneNumber = e.target.value;
    setNewPhone(newPhoneNumber);
  }

  const handleAddNumber = (e)=>{
    if (newPhone !== '') { // prevent adding ampty field
      setPhoneArr([...phoneArr, newPhone]);
      // nakon unosa broja praznimo polje za broj
      setNewPhone('');
    }
  };

  const handleSaveContact = (e) => {
    e.preventDefault(); // da taster unutar forme ne bi po defaultu slao na server i refreshovao itd.

    // const data = state;
    const data = {
      ...state,
      phones: phoneArr
    };
    console.log('Save contact', data);
  };

  return (
    <form onSubmit={handleSaveContact}>
      <h1>Add Contact Form 2</h1>
      <p>with multiple phone numbers</p>

      <div>
        <label>Nickname</label>
        <input
          type="text"
          name="nickname"
          value={state.nickname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Favorite</label>
        <input
          type="checkbox"
          name="favorite"
          value={state.favorite}
          onChange={handleChange}
        />
      </div>

      <h4>Phone numbers</h4>
      <div>
        {phoneArr.map((phone) => {
          return (
            <div key={phone}>Phone number: {phone}</div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          name="newphone"
          value={newPhone}
          onChange={handleChangeNewPhone}
        />
        <button onClick={handleAddNumber}>add number</button>
      </div>

      <button>Save contact</button>

    </form>
  )
};

export default AddContactForm2;