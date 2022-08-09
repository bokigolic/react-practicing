import { useState } from "react";
import TabelarFormListItem from "./TabelarFormListItem";


let counter = 0;

const makeNewId = () => {
  // make unique new ID
  counter++;
  const id = counter; // new id
  return id;
};


const TabelarFormList = () => {

  const [stateArr, setStateArr] = useState([]);

  // CRUD (create read update delete)

  const deleteItem = (id) => {
    const updatedItems = stateArr.filter(item => {
      if (item.id === id) {
        // brisemo taj sa takvim IDom
        return false;
      }
      return true; // svi ostali ostaju u nizu
    });
    setStateArr(updatedItems);
  };

  const createItem = () => {
    const newitem = {
      id: makeNewId(),
      title: '',
      quantity: 0,
      unit: 'kom',
      price: 0,
    };
    const updatedItems = [...stateArr, newitem];
    setStateArr(updatedItems);
  };

  const _handleChangeItem = (id, name, value)=> {
    const updatedItems = stateArr.map((state)=>{
      // idemo kroz niz state-ova
      if (state.id === id) {
        // trazeni state updateujemo
        const updatedItem = {
          ...state,
          [name]: value
        };
        return updatedItem;
      }
      return state; // svi ostali ostaju neizmenjeni
    });
    setStateArr(updatedItems);
  };


  return (
    <>
      <div>
        <h1>Tabelar Form (kao excel)</h1>
        <p>Primer tabela za inventarisanje.</p>
        <table className="tabelar-form">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Quantity
              </th>
              <th>
                Unit
              </th>
              <th>
                Price
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>

            {
              stateArr.map((item) => {
                return (
                  <TabelarFormListItem key={item.id} item={item} deleteItem={deleteItem} _handleChangeItem={_handleChangeItem} />
                )
              })
            }

          </tbody>
        </table>

        <button onClick={createItem}>Dodaj novi red</button>



      </div>
    </>
  );
};

export default TabelarFormList;