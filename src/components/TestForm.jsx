import { useState } from "react";

const TestForm = () => {

  const preset = {
    nickname: "",
    email: "",
    favorite: false,
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


  return (
    <form>
      <h1>Test form</h1>

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



    </form>
  )
};

export default TestForm;