import { ParticipantIcon } from "./ParticipantIcon";
import "./TeamCard.css";

interface card {
  number: number;
}

export default function TeamCard(props: card) {
  return (
    <div className="grid">
      <div className="card-team">
        <h5>{props.number}</h5>
        <h5>team Logo</h5>
        <div className="grid-team">
          <h5>team name</h5>
          <h5>team coins</h5>
        </div>
        <ParticipantIcon />
        <ParticipantIcon />
        <ParticipantIcon />
        <ParticipantIcon />
      </div>
    </div>
  );
}
