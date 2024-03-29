import { useEffect, useState } from "react";


// TODO: dovrsiti tagove da svak itag dobije button za delete taga. I da se preventuju duplikati prilikom dodavanja taga.


let counter = 0;
const makeNewId = ()=> {
  counter++;
  return counter; // new ID je broj iz countera
};


const AddContactForm3 = () => {

  const preset = {
    nickname: "",
    email: "",
    favorite: false,
  };

  const [state, setState] = useState(preset);

  const [phoneArr, setPhoneArr] = useState([]); // array of states
  const [newPhone, setNewPhone] = useState('');
  
  const [tags, setTags] = useState([]); // array of states
  const [newTag, setNewTag] = useState('');
  
  const [selectedArr, setSelectedArr] = useState([]); // array of states

  const _handleChangeSelected = (phone, checked) => {
    if (checked) {
      // selected
      setSelectedArr([...selectedArr, phone]); // add selected number to list
    } else {
      // deselected
      // TODO remove selected number from list
      const updatedSeklectedState = selectedArr.filter((phone2)=>{
        if (phone2 === phone) {
          // removine deselcted phone
          return false;
        }
        return true; // all other numbers stay in array
      });
      setSelectedArr(updatedSeklectedState);
    }
  };

  const handleDeleteSelected = (e)=>{
    const phoneArrAfterDelete = phoneArr.filter((phone)=>{
      if (selectedArr.includes(phone)) {
        // ako se phone nalazi u nizu selektovanih
        return false; // delete because is selected
      }
      return true; // all others stay in array
    });
    setPhoneArr(phoneArrAfterDelete);
    // takodje cistimo sve iz niza selektovanih
    setSelectedArr([]);
  };



  const handleChange = (e) => {
    // univerzalni handleChange za sve forme, radi i za checboxo
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleChangeNewPhone = (e) => {
    const newPhoneNumber = e.target.value;
    setNewPhone(newPhoneNumber);
  }

  const handleChangeNewTag = (e) => {
    const newTag = e.target.value;
    setNewTag(newTag);
  }

  const handleAddNumber = (e) => {
    if (newPhone !== '') { // prevent adding ampty 
      const newphonePrepared = newPhone.trim(); // uklanja nehoticno unete razmake na pocetku ili kraju teksta
      if (phoneArr.includes(newphonePrepared)) {
        // duplicate!!!!
        // do nothing
      } else {
        // upisujemo samo ako nije duplikat
        setPhoneArr([...phoneArr, newphonePrepared]);
        // nakon unosa broja praznimo polje za broj
        setNewPhone('');
      }
    }
  };

  const handleAddTag = (e) => {
    let tagTrimmed = newTag.trim(); // uklanja nehoticno unete razmake na pocetku ili kraju teksta
    if (tagTrimmed !== '') { // prevent adding ampty 

      // KORAK provera da li ima vec unesen takv tag
      let alreadyExist = false;
      tags.forEach((item)=>{
        if (item.tagText === tagTrimmed) {
          alreadyExist = true;
        }
      });
    
      // if (tags.includes(newTagObject)) {
        if (alreadyExist) { // TODO kasnije napraviti novi princip trazenja dupliakata
          // duplicate!!!!
          // do nothing
        } else {
          // upisujemo samo ako nije duplikat
          const newTagObject = {
            id: makeNewId(),
            tagText: tagTrimmed
          };
          
        setTags([...tags, newTagObject]);
        // nakon unosa broja praznimo polje za broj
        setNewTag('');
      }
    }
  };

  const deleteTag = (id)=> {
    const updatedItems = tags.filter((item)=>{
      if (id === item.id) {
        return false; // False znaci da filter petlje njega brize iz arreja
      }
      return true; // true svi ostalo ostaju u nizu
    });
    setTags(updatedItems)
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
      <h1>Add Contact Form 3</h1>
      <p>with multiple phone numbers</p>
      <p>and with multiple fields/checkboxes</p>

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
        <button type="button" onClick={handleAddNumber}>add number</button>
      </div>


      <h4>Tags</h4>
      <span>Moćnije rešene nego za telefone. Ne dozvoljava duplikate i može da se brise svaki pojedinačno</span>
      <div>
        {tags.map((tag) => {
          return (
            <div key={tag.id}>tags: {tag.tagText}<button onClick={(e)=>{deleteTag(tag.id)}}>&times;</button></div>
          );
        })}
      </div>
      <div>
        <input
          type="text"
          name="newtag"
          value={newTag}
          onChange={handleChangeNewTag}
        />
        <button type="button" onClick={handleAddTag}>add tag</button>
      </div>

      <h4>Multiple delete selected</h4>
      <div>
        {phoneArr.map((phone) => {
          return (
            <div key={phone}>
              <input
                type="checkbox"
                onChange={(e) => {
                  const checked = e.target.checked;
                  _handleChangeSelected(phone, checked);
                }}
              />
              {phone}
            </div>
          );
        })}
      </div>
      <button type="button" onClick={handleDeleteSelected}>Delete selected</button>


      <br />
      <br />
      <button type="submit">Save contact</button>

    </form>
  )
};

export default AddContactForm3;