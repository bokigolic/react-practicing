const CalculatorBtn = (props) => {


  return (
    <div
      className="calculator-taster"
      onClick={(e) => {
        props.click(props.id)
      }}
    >
      {props.title}
    </div>
  )
};

export default CalculatorBtn;