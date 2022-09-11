
const ParkingGarazaPodSprat = (props) => {
  return (
    <div className="podsprat">
      <header>
        {props.podSprat === "podSpratA" ? "A" : "B"}
      </header>
      <div className="lista-parking-mesta">
        {
          props.mesta.map((mesto, index) => {
            return (
              <div key={index} className="mesto">
                {mesto}
              </div>
            )
          })
        }
      </div>
    </div>
  )
};
export default ParkingGarazaPodSprat;