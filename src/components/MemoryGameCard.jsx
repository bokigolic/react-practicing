const MemoryGameCard = (props) => {
  const card = props.card;
  const index = props.index;
  const isOpened = props.isOpened;
  const clickOnCard = props.clickOnCard;

  const handleClick = (e) => {
    clickOnCard(index)
  }

  let jsx = null;
  if (card !== null) {
    // ‚artica je na stolu
    if (isOpened === true) {
      // otvorena
      jsx = (
        <div className="memory-card opened">{card}</div>
      )
    } else {
      //zatvorena
      jsx = (
        <div className="memory-card" onClick={handleClick}></div>
      )
    }
  } else {
    // kartica je sklonjena sa stola
  }

  return (
    <div className="item">
      {jsx}
    </div>
  )
};
export default MemoryGameCard;