import { useState } from "react";
import TabelarFormListItem from "./TabelarFormListItem";

const TabelarFormList = () => {

  const [stateArr, setStateArr] = useState([
    {
      id: 1,
      title: 't',
      price: 150,
      quantity: 11
    },
    {
      id: 2,
      title: 't2',
      price: 280,
      quantity: 222
    },
  ]);


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
                Price
              </th>
              <th>
                Quantity
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>

            {
              stateArr.map((item) => {
                return (
                  <TabelarFormListItem key={item.id} item={item} />
                )
              })
            }

          </tbody>
        </table>

        <button>Dodaj novi red</button>



      </div>
    </>
  );
};

export default TabelarFormList;