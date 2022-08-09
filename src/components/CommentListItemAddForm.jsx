import { useState } from "react";

const CommentListItemAddForm = (props) => {
  // const item = props.item;
  // const deleteComment = props.deleteComment;
  // const updateComment = props.updateComment;
  const createComment = props.createComment;

  const preset = {
    title: "",
    comment: "",
  };

  const [state, setState] = useState(preset); // state za polja forme od ove komponente

  const handleChange = (e) => {
    // univerzalni handleChange za sve forme, radi i za checboxove
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  };

  // ovde nemamo edit mode nego samo jedan jedini mode create new item
  const jsx = (
    <>
      <div className="flex-1">
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="comment"
          value={state.comment}
          onChange={handleChange}
          placeholder="Your comment here"
        />
      </div>
      <button onClick={() => {
        createComment(state);
        // posle cuvanja komenatara treba da ispraznimo formu za novi komentar
        setState(preset);
      }}>Add new comment</button>
    </>
  );



  return (
    <div className="comment-item">
      {jsx}
    </div>
  )
};
export default CommentListItemAddForm;