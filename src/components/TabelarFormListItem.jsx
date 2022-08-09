
// svaki item od TabelarForm je jeadn red tabele <tr>
const TabelarFormListItem = (props) => {
  const item = props.item;
  const id = item.id; // kad je jedna komponenta jedan item onda ona ima svoj ID uvek
  const deleteItem = props.deleteItem;
  const _handleChangeItem = props._handleChangeItem;


  const handleChange = (e) => {
    // NIJE UNIVERZALNI
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    /*
    setState({
      ...state,
      [name]: value
    });
    */
    _handleChangeItem(id, name, value);
  };


  return (
    <tr>
      <td>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={() => {
          deleteItem(id)
        }}>Delete</button>
      </td>
    </tr>
  );
};

export default TabelarFormListItem;