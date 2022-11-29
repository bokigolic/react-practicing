import { useState } from "react";


/*
CILJEVI I IDEJE:
- na vrhu opcije ćirilica/latinica
*/
const Slovarica = () => {

  const [tekst, setTekst] = useState("");

  const handleChangeZaKlasicnoPolje = (e) => {
    const target = e.target;
    const value = target.value.toUpperCase();
    setTekst(value)
  };




  return (
    <div className="slovarica-app">
      <h1>Slovarica</h1>

      <section>
        <label>Unesi tekst </label>
        <input className="klasicni_input"
          name="klasicni_input"
          value={tekst}
          onChange={handleChangeZaKlasicnoPolje}
        />
      </section>


      <section>
        <div className="magicni-input">
          <div className="item">
            <div className="slovarica-kartica">A</div>
          </div>
        </div>

      </section>

      <section>
        <div className="magicni-input">
          <div className="item">
            <div className="slovarica-kartica">A</div>
          </div>
          <div className="item">
            <div className="slovarica-kartica">A</div>
          </div>
        </div>

      </section>

      <section>
        <div className="slovarica-board">

          <div className="item">
            <div className="slovarica-kartica">A</div>
          </div>
          <div className="item">
            <div className="slovarica-kartica">A</div>
          </div>


        </div>

      </section>



    </div>
  );
};
export default Slovarica;