const TicTacToeField = (props) => {
  const row = props.row
  const col = props.col
  const board = props.board

  const value = board[row][col]

  const handleClick = () => {
    console.log("click on ", row, col)
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