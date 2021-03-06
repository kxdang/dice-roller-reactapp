import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", isRolling: false };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice(e) {
    let randomDie1 = Math.floor(Math.random() * this.props.sides.length);
    let randomDie2 = Math.floor(Math.random() * this.props.sides.length);

    this.setState({
      die1: this.props.sides[randomDie1],
      die2: this.props.sides[randomDie2],
      isRolling: true
    });

    //Wait 1 second and set isRolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 800);
  }

  render() {
    return (
      <div className="RollDice">
        <h1>React Dice Roller</h1>
        <div className="RollDice-die">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </div>

        <button onClick={this.rollDice} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
