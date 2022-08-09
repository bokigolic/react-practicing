
// svaki item od TabelarForm je jeadn red tabele <tr>
const TabelarFormListItem = (props) => {
  const item = props.item;
  const id = item.id; // kad je jedna komponenta jedan item onda ona ima svoj ID uvek
  const deleteItem = props.deleteItem;


  return (
    <tr>
      <td>
        <input
          type="text"
          name="title"
          value={item.title}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={item.price}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={item.quantity}
        />
      </td>
      <td>
        <button onClick={()=>{
          deleteItem(id)
        }}>Delete</button>
      </td>
    </tr>
  );
};

export default TabelarFormListItem;