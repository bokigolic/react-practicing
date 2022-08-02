import { useState } from "react";

const AddContactForm = () => {

  const preset = {
    nickname: "",
    email: "",
    favorite: false,
    phone: ""
  };

  const [state, setState] = useState(preset);

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

  const handleSaveContact = (e) => {
    e.preventDefault(); // da taster unutar forme ne bi po defaultu slao na server i refreshovao itd.

    const data = state;
    console.log('Save contact', data);
  };

  return (
    <form onSubmit={handleSaveContact}>
      <h1>Add Contact Form</h1>

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
      <div>
        <label>Phone number</label>
        <input
          type="text"
          name="phone"
          value={state.phone}
          onChange={handleChange}
        />
      </div>



      <button>Save contact</button>

    </form>
  )
};

export default AddContactForm;