import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {

  render() {
    const { currentScore, bestScore } = this.props;
    return (
      <header className="App-header">
        <h1>Who's That Pokèmon!?</h1>
        <div className="d-flex justify-content-around align-items-center">
          <div className="score">
            <p>Current Score</p>
            <p>{currentScore}</p>
          </div>
          <div className="score">
            <p>Best Score</p>
            <p>{bestScore}</p>
          </div>
        </div>

      </header>
    );
  }
}