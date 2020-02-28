import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one" };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice(e) {
    let randomDie1 = Math.floor(Math.random() * this.props.sides.length);
    let randomDie2 = Math.floor(Math.random() * this.props.sides.length);

    this.setState({
      die1: this.props.sides[randomDie1],
      die2: this.props.sides[randomDie2]
    });
  }

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.rollDice}>Roll the dice</button>
      </div>
    );
  }
}

export default RollDice;
