const KockicaGlupa = (props) => {
  const broj = props.broj;

  let color = "";
  if (broj > 0 && broj < 4) {
    color = "blue";
  } else if (broj > 3 && broj < 7) {
    color = "yellow";
  } else if (broj > 6 && broj < 10) {
    color = "red";
  } else if (broj > 9) {
    color = "red-hot";
  }

  // <div className="kockica">

  return (
    <div className={"kockica " + color}>
      {props.broj}
    </div>
  );
};

export default KockicaGlupa;