import { getSlovaricaCardImgSrc } from "../utils/slovarica-utils";

const SlovaricaKartice = (props) => {
  const slovo = props.slovo;
  const clickable = props.clickable;
  const clickNaKarticu = props.clickNaKarticu;
  const tip = props.tip;

  let handleClick = () => { }; // do nothing if not clickable
  if (clickable === true) {
    handleClick = (e) => {
      clickNaKarticu(slovo)
    }
  }

  let cl = "slovarica-kartica";
  if (clickable === true) {
    cl += " clickable"
  }

  let jsxCardContent = (
    <>
      <img src={getSlovaricaCardImgSrc(slovo)} alt={slovo} />
      <span>{slovo}</span>
    </>
  );
  if (tip === "SLOVO") {
    cl += " kartica-tip-slovo"
    jsxCardContent = (
      <>
        {slovo}
      </>
    );
  } else if (tip === "SLIKA") {
    cl += " kartica-tip-slika"
    jsxCardContent = (
      <>
        <img src={getSlovaricaCardImgSrc(slovo)} alt={slovo} />
      </>
    );
  }


  return (
    <div className="item" onClick={handleClick}>
      <div className={cl}>
        {jsxCardContent}
      </div>
    </div>
  )
};
export default SlovaricaKartice;