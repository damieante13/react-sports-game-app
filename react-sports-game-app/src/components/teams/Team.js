import React from "react";

function Team(props) {
  let shotPercentageDiv;

  if (props.stats.shots) {
    const shotPercentage = Math.round(
      (props.stats.score / props.stats.shots) * 100
    );

    shotPercentageDiv = (
      <div>
        <strong>Shot %:{shotPercentage}</strong>
      </div>
    );
  }

  return (
    <div className="Team">
      <h2>{props.name}</h2>

      <div className="identity">
        <img src={props.logo} alt={props.name} width={100} height={100} />
      </div>

      <div>
        <strong>Shots:</strong>
        {props.stats.shots}
      </div>

      <div>
        <strong>Score:</strong>
        {props.stats.score}
      </div>

      {shotPercentageDiv}

      <button onClick={props.handlerShot}>Shoot!</button>
    </div>
  );
}

export default Team;
