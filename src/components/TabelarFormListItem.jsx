
// svaki item od TabelarForm je jeadn red tabele <tr>
const TabelarFormListItem = (props) => {
  const item = props.item;

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
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TabelarFormListItem;