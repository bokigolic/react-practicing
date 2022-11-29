import { useState } from "react";


/*
CILJEVI I IDEJE:
- na vrhu opcije ćirilica/latinica
*/
const Slovarica = () => {

  const [tekst, setTekst] = useState("");
  const [specijalniinput, setSpecijalniinput] = useState("");

  const handleChangeZaKlasicnoPolje = (e) => {
    const target = e.target;
    const value = target.value.toUpperCase();
    setTekst(value)
  };

  const handleChangeZaSpecijalniInput = (e) => {
    const target = e.target;
    const value = target.value;
    console.log("Specijalni input changed", value);
    // uzeli smo value iz specijalnog inputa KOJI DOZVOLJAVA SAM OJEDNO SLOVO i stavili smo ga u poromenljivu vlue.
    // sad to JEDN OSLOVO premestamo u glavni state
    // !) value pridodjemo state tekst-u
    setTekst(tekst + value)
    // 2) i brisemo value iz specijalnog inputa
    setSpecijalniinput("")
  }




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

          <input
            className="specijalniinput"
            name="specijalniinput"
            value={specijalniinput}
            onChange={handleChangeZaSpecijalniInput}
            maxLength="1"
          />

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

          <input
            className="specijalniinput"
            name="specijalniinput"
            value={specijalniinput}
            onChange={handleChangeZaSpecijalniInput}
            maxLength="1"
          />

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