import { useState } from "react";
import IndividualCard from "../Components/IndividualCard";
import TeamCard from "../Components/TeamCard";
import PresentGame from "../Components/PresentGame";

export function Home() {
  const componentsArray = new Array(16).fill(null);

  return (
    <>
      <div className="grid-navigator">
        <div className="card">selector</div>
        <div className="card">games</div>
      </div>
      <div className="grid team-card">
        <div>
          {componentsArray.map((_, index) => (
            <TeamCard number={index + 1} />
          ))}
        </div>
        <div>
          <PresentGame />
          <IndividualCard />
        </div>
      </div>
    </>
  );
}
