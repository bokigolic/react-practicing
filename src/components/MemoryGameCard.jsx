import { getMemoryGameCardImgSrc } from "../utils/memory-game-utils";

const MemoryGameCard = (props) => {
  const card = props.card;
  const index = props.index;
  const isOpened = props.isOpened;
  const clickOnCard = props.clickOnCard;

  const cheat = false;

  const handleClick = (e) => {
    clickOnCard(index)
  }

  let jsx = null;
  if (card !== null) {
    // kartica je na stolu
    /*
    if (isOpened === true) {
      // otvorena
      jsx = (
        <div className="memory-card opened">
          <img src={getMemoryGameCardImgSrc(card)} alt={card} />
        </div>
      )
    } else {
      //zatvorena
      jsx = (
        <div className="memory-card" onClick={handleClick}></div>
      )
    }
    */

    jsx = (
      <div className={isOpened ? "memory-card-flipping opened" : "memory-card-flipping"}>
        <div className="front">
          <div className="memory-card">
            <img src={getMemoryGameCardImgSrc(card)} alt={card} />
          </div>
        </div>
        <div className="back">
          <div className="memory-card" onClick={handleClick}></div>
        </div>
        {
          cheat ? (
            <div className="cheat-card">{card}</div>
          ) : (null)
        }
      </div>
    )

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