import CalculatorBtn from "./CalculatorBtn";

const Calculator = () => {
  return (
    <>
      <h4>Calculator</h4>
      <div className="calculator">
        <div className="calculator-ekran">
          123
        </div>
        <div className="calculator-tastatura">
          <CalculatorBtn title={7} />
          <CalculatorBtn title={8} />
          <CalculatorBtn title={9} />
          <CalculatorBtn title={<span>&times;</span>} />

          <CalculatorBtn title={4} />
          <CalculatorBtn title={5} />
          <CalculatorBtn title={6} />
          <CalculatorBtn title={<span>-</span>} />

          <CalculatorBtn title={1} />
          <CalculatorBtn title={2} />
          <CalculatorBtn title={3} />
          <CalculatorBtn title={<span>+</span>} />

          <CalculatorBtn title={''} />
          <CalculatorBtn title={0} />
          <CalculatorBtn title={'.'} />
          <CalculatorBtn title={<span>=</span>} />
        </div>

      </div>
    </>
  )
};

export default Calculator;