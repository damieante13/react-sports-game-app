import React, { Component } from "react";
import ScoreBoard from "../scoreboard/ScoreBoard";
import Team from "../teams/Team";
import "../game/Game.css";

import shotz from "../../assets/sounds/LaserBlasts.mp3";
import scorez from "../../assets/sounds/Jab.mp3";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitorTeamStats: {
        shots: 0,
        score: 0,
      },
    };
    this.shotSound = new Audio(shotz);
    this.scoreSound = new Audio(scorez);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;
      this.scoreSound.play();
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitorTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    return (
      <div className="Game">
        <h1>Welcome to {this.props.venue}</h1>
        <ScoreBoard
          visitorTeamStats={this.state.visitorTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <div className="stats">
          <Team
            name={this.props.visitorTeam.name}
            logo={this.props.visitorTeam.logoSrc}
            stats={this.state.visitorTeamStats}
            handlerShot={() => this.shoot("visitor")}
          />

          <div className="versus">
            <h1>VS</h1>
          </div>

          <div>
            <strong>Resets: </strong> {this.state.resetCount}
            <button onClick={this.resetGame}> Reset Game </button>
          </div>

          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            handlerShot={() => this.shoot("home")}
          />
        </div>
      </div>
    );
  }
}

export default Game;
