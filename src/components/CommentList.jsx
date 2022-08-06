import { useState } from "react";
import CommentListItem from "./CommentListItem";
import CommentListItemAddForm from "./CommentListItemAddForm";


let counter = 0;

const makeNewId = ()=> {
  // make unique new ID
  counter++;
  const id = counter; // new id
  return id;
};



const CommentList = () => {

  /*
  const dummy_data = [
    {
      id: 1,
      title: 'A',
      comment: 'aaa'
    },
    {
      id: 2,
      title: 'B',
      comment: 'bbb'
    },
    {
      id: 3,
      title: 'C',
      comment: 'ccc'
    },
  ];
  */

  const [comments, setComments] = useState([]);


  // CRUD (create read update delete)

  const deleteItem = (id) => {
    const updatedComments = comments.filter(item => {
      if (item.id === id) {
        // brisemo taj sa takvim IDom
        return false;
      }
      return true; // svi ostali ostaju u nizu
    });
    setComments(updatedComments);
  };

  const updateItem = (id, newData) => {
    const updatedComments = comments.map(item => {
      if (item.id === id) {
        //editujemo samo sa tim ID
        const updatedItem = {
          ...item,
          ...newData,
          id: id // za svaki slucaj da neko ne mi u sklopu newdata posalo neki pogresan id
        }
        return updatedItem;
      }
      return item; // sve ostale koji nisu taj idi ostaju neizmenjeni
    });
    setComments(updatedComments);
  };

  const createItem = (formData)=>{
    const newComment = {
      ...formData,
      id: makeNewId()
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
  };


  return (
    <div>
      <h1>Comment List</h1>
      <div className="comment-list">
        {
          comments.map(item => {
            return (
              <CommentListItem
                key={item.id}
                item={item}
                deleteComment={deleteItem}
                updateComment={updateItem}
              />
            );
          })
        }
        <CommentListItemAddForm createComment={createItem} />
      </div>

    </div>
  )
};
export default CommentList;