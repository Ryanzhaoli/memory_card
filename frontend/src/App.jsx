
import { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Game from "./components/game";
import Papa from "papaparse";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      bestScore: 0,
      pokemonNames: [],
      currPokemon: "",
      seenPkmn: [],
    };

    this.start = this.start.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.updateBestScore = this.updateBestScore.bind(this);
    this.randomPokemon = this.randomPokemon.bind(this);
    this.updateSeenPkmn = this.updateSeenPkmn.bind(this);
  }

  componentDidMount() {
    fetch("/pokemon_151.csv")
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: false,
          complete: (results) => {
            this.setState({
              pokemonNames: results.data.flat(),
            });
          },
        });
      });
  }
  
  randomPokemon() {
    let random = Math.floor(Math.random() * this.state.pokemonNames.length);
    this.setState({
      currPokemon: this.state.pokemonNames[random],
    });
  }

  updateSeenPkmn = () => {
    this.setState((prevState) => ({
      seenPkmn: [...prevState.seenPkmn, this.state.currPokemon],
    }));
  };

  updateBestScore() {
    if (this.state.currentScore > this.state.bestScore) {
      this.setState(() => ({
        bestScore: this.state.currentScore,
      }));
    }
  }

  incrementScore() {
    this.setState((prevState) => ({
      currentScore: prevState.currentScore + 1,
    }));
  }

  start() {
    this.updateBestScore();
    this.setState(() => ({
      currentScore: 0,
      seenPkmn: [],
      currPokemon: "",
    }));
    this.randomPokemon();
  }

  render() {
    const { currentScore, bestScore } = this.state;
    return (
      <div className = "App">
        <div className="head">
          <Header
            className = "App-header"
            currentScore = {currentScore}
            bestScore = {bestScore}
            start = {this.start}
          />
        </div>
        <div className ="button-start">
            <button className = "button-mid" onClick={this.start}>Start Game</button>
        </div>
        <div className="game">  
          <Game
            incrementScore = {this.incrementScore}
            start = {this.start}
            updateBestScore = {this.updateBestScore}
            seenPkmn = {this.state.seenPkmn}
            updateSeenPkmn = {this.updateSeenPkmn}
            currPokemon={this.state.currPokemon}
            randomPokemon = {this.randomPokemon}
          />
        </div>
      </div> 
    );
  }
}