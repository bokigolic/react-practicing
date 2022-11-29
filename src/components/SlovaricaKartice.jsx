const SlovaricaKartice = (props) => {
  const slovo = props.slovo;
  const clickable = props.clickable;
  const clickNaKarticu = props.clickNaKarticu;

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

  return (
    <div className="item" onClick={handleClick}>
      <div className={cl}>{slovo}</div>
    </div>
  )
};
export default SlovaricaKartice;