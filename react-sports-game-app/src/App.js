import React, { Component } from "react";
import "./App.css";

import coquiImg from "./assets/images/coqui-png-880_862.png";
import honeyBadgersImg from "./assets/images/badger_PNG43.png";
import batmenImg from "./assets/images/atomicBatmen.jpeg";
import monstersImg from "./assets/images/monsterTeam.png";

import Game from "./components/game/Game";

class App extends Component {
  render() {
    const coqui = {
      name: "Puerto Rico Coqui",
      logoSrc: coquiImg,
    };
    const honeyBadgers = {
      name: "Clementon Honeybadgers",
      logoSrc: honeyBadgersImg,
    };
    const bats = {
      name: "Gotham Bats",
      logoSrc: batmenImg,
    };
    const monsters = {
      name: "Fresno Monsters",
      logoSrc: monstersImg,
    };

    return (
      <div className="App">
        <h1>Damiean React Sports Game</h1>
        <header className="App-header">
          <Game venue="Gym 1" homeTeam={coqui} visitorTeam={honeyBadgers} />

          <Game venue="Gym 2" homeTeam={bats} visitorTeam={monsters} />
        </header>
      </div>
    );
  }
}
export default App;
