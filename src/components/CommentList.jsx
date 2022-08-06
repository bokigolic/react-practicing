import CommentListItem from "./CommentListItem";

const CommentList = () => {

  const data = [
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


  return (
    <div>
      <h1>Comment List</h1>
      <div className="comment-list">
          {
            data.map(item => {
              return (
                <CommentListItem key={item.id} item={item} />
              );
            })
          }
      </div>

    </div>
  )
};
export default CommentList;