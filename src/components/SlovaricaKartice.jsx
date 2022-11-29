const SlovaricaKartice = (props) => {
  const slovo = props.slovo;
  
  return (
    <div className="item">
      <div className="slovarica-kartica">{slovo}</div>
    </div>
  )
};
export default SlovaricaKartice;