const TicTacToeField = (props) => {
  const row = props.row;
  const col = props.col;
  const board = props.board;
  const clicked = props.clicked;

  const value = board[row][col]

  
  const handleClick = (e) => {
    // console.log("click on ", row, col)
    clicked(row, col)
  }
  

  let template = (
    <div className="figure figure-empty" onClick={handleClick}></div>
  )
  if (value === "X") {
    template = (
      <div className="figure figure-x">X</div>
    )
  } else if (value === "O") {
    template = (
      <div className="figure figure-o">O</div>
    )
  }

  return (
    <div className="field">
      {template}
    </div>
  )
};
export default TicTacToeField;