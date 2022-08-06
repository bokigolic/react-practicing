import { useState } from "react";

const CommentListItem = (props) => {
  const item = props.item;
  const deleteComment = props.deleteComment

  const [editMode, setEditMode] = useState(false);

  let jsx = (
      <div>
        <span>{item.title}</span> 
        <span>{item.comment}</span> 
        <button onClick={(e)=>{setEditMode(true)}}>Edit</button>
        <button onClick={(e)=>{deleteComment(item.id)}}>Delete</button>
      </div>
  );
  
  if (editMode) {
    // ako je u edit mode
    jsx = (
      <div>
        <input value={item.title} />
        <input value={item.comment} />
        <button>Save</button>
        <button onClick={()=>{setEditMode(false)}}>Cancel</button>
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