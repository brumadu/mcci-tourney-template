import "./IndividualCard.css";

export default function IndividualCard() {
  const playerNumber = new Array(40).fill(null);

  return (
    <div className="grid-individual">
      <div className="scroll-individual">
        <div className="title-individual">
          <h4>Individual Coin Count</h4>
        </div>

        {playerNumber.map((_, index) => (
          <div className="row-individual">
            <div>{index}</div>
            <div className="row">
              <h2>icon</h2>
              <h2>name</h2>
            </div>
            <div className="row">
              <h4>total coins</h4>
              <img src="japan." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
