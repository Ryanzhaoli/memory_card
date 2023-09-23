import React, { Component } from "react";

export default class Prompt extends Component {
  constructor(props) {
    super(props);

    this.handleChoice = this.handleChoice.bind(this);
  }

  handleChoice(choice) {
    this.props.update(choice);
  }

  render() {
    return (
      <div>
        <p>Have You Seen This Pokèmon?</p>
        <div className="e-flex justify-content-around align-items-center">
          <button
            className = "button"
            onClick={() => {
              this.handleChoice(true);
            }}
          >
            Yes
          </button>
          <button
            className = "button"
            onClick={() => {
              this.handleChoice(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  }
}