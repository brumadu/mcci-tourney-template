import { useState } from "react";
import "./PresentGame.css";

export default function PresentGame() {
  const [isFinal, setIsFinal] = useState(true);

  return (
    <div>
      <div className="grid-game">
        <div>
          <div className="row-game">
            <div> icon </div>
            <div>
              <h2>Game 1/5</h2>
              <h2>Gametitle</h2>
            </div>
          </div>
          {isFinal ? (
            <>
              <div className="row-game">
                <div> teamIcon </div>
                <div>
                  <h2>teamName</h2>
                  <h2>bubbles</h2>
                </div>
              </div>
              <div className="row-game">
                <div> teamIcon </div>
                <div>
                  <h2> teamName </h2>
                  <h2>bubbles</h2>
                </div>
              </div>
            </>
          ) : (
            <div>
              <div> Multiplier </div>
              <div className="row-game">
                <h2>X1.0</h2>
                <h2>coinImage</h2>
              </div>
            </div>
          )}
        </div>
        <div className="card-img">
          se liga
          <img />
        </div>
      </div>
    </div>
  );
}
