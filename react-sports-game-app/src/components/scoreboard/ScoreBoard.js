import React from "react";
import "../scoreboard/ScoreBoard.css";

function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      <div className="teamStats">
        <h3>Visitors</h3>
        <h3>{props.visitorTeamStats.score}</h3>
      </div>

      <h3>Scoreboard</h3>

      <div className="teamStats">
        <h3>Home</h3>
        <h3>{props.homeTeamStats.score}</h3>
      </div>
    </div>
  );
}

export default ScoreBoard;
