import { useEffect, useState } from "react";

const CommentListItem = (props) => {
  const item = props.item;
  const deleteComment = props.deleteComment;
  const updateComment = props.updateComment;

  const [editMode, setEditMode] = useState(false);

  const preset = {
    title: "",
    comment: "",
  };

  const [state, setState] = useState(preset); // state za polja forme od ove komponente

  useEffect(() => {
    // pratimo props.item i kad se promeni poziva se ova funckija
    setState(item); // u state forme upisujemo to stnje od itema
  }, [item])

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

  let jsx = (
    <div>
      <span>{item.title}</span>
      <span>{item.comment}</span>
      <button onClick={(e) => { setEditMode(true) }}>Edit</button>
      <button onClick={(e) => { deleteComment(item.id) }}>Delete</button>
    </div>
  );

  if (editMode) {
    // ako je u edit mode
    jsx = (
      <div>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="comment"
          value={state.comment}
          onChange={handleChange}
        />
        <button onClick={()=>{
          updateComment(item.id, state);
          setEditMode(false);
        }}>Save</button>
        <button onClick={() => { setEditMode(false) }}>Cancel</button>
      </div>
    );
  }


  return (
    <div className="comment-item">
      {jsx}
    </div>
  )
};
export default CommentListItem;