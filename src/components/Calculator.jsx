import { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";

const Calculator = () => {
  const [ekran, setEkran] = useState("");
  const [operacija, setOperacija] = useState("");
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);


  const _handleClick = (id) => {
    if (id > 0 || id === 0) {
      // pritisnut taster 0123465679
      const broj = id;
      /*
      if (operacija !== "") {
        // znaci prethodno je kliknuto na operaicju
        setEkran("" + broj);
        setOperacija("");
      } else {
        // nema prethodne operacija
        setEkran(ekran + broj);
      }
      */
      setEkran(ekran + broj);
    } else {
      // pritisnut taster operacija
      if (id === 'PLUS') {
        setOperacija("PLUS");
        setN1(parseFloat(ekran));
        setEkran("");
      } else if (id === "MINUS") {
        setOperacija("MINUS");
        setN1(parseFloat(ekran));
        setEkran("");
      } else if (id === "JEDNAKO") {
        const _n2 = parseFloat(ekran)
        setN2(_n2);
        if (operacija === "PLUS") {
          const zbir = n1 + _n2;
          setEkran("" + zbir);
        } else if (operacija === "MINUS") {
          const razlika = n1 - _n2;
          setEkran("" + razlika)

        };
      }



    }
  };

  return (
    <>
      <h4>Calculator</h4>
      <div className="calculator">
        <div className="calculator-ekran">
          {ekran}
        </div>
        <div className="calculator-tastatura">
          <CalculatorBtn id={7} title={7} click={_handleClick} />
          <CalculatorBtn id={8} title={8} click={_handleClick} />
          <CalculatorBtn id={9} title={9} click={_handleClick} />
          <CalculatorBtn title={<span>&times;</span>} />

          <CalculatorBtn id={4} title={4} click={_handleClick} />
          <CalculatorBtn id={5} title={5} click={_handleClick} />
          <CalculatorBtn id={6} title={6} click={_handleClick} />
          <CalculatorBtn id={'MINUS'} title={<span>-</span>} click={_handleClick} />

          <CalculatorBtn id={1} title={1} click={_handleClick} />
          <CalculatorBtn id={2} title={2} click={_handleClick} />
          <CalculatorBtn id={3} title={3} click={_handleClick} />
          <CalculatorBtn id={'PLUS'} title={<span>+</span>} click={_handleClick} />

          <CalculatorBtn title={''} />
          <CalculatorBtn id={0} title={0} click={_handleClick} />
          <CalculatorBtn title={'.'} />
          <CalculatorBtn id={'JEDNAKO'} title={<span>=</span>} click={_handleClick} />
        </div>

      </div>
    </>
  )
};

export default Calculator;