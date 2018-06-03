import React, { Component } from 'react';
import Button from '../components/button/button.component'
import Result from '../components/result/result.component'
import Choices from '../components/choices/choices.component'


const winConditions = {
  rock: ['scissors'],
  paper: ['rock'],
  scissors: ['paper']
};

const conditions =Object.keys(winConditions);
//randomly generate computer's choice
const player2Choice = conditions[Math.floor(Math.random() * conditions.length)];

const player1Choice = props.player1Choice

function findWinner(player1Choice, player2Choice) {//find winner
  if (winConditions[player1Choice] .includes(player2Choice)) return 'You Win';
  if (winConditions[player2Choice] .includes(player1Choice)) return 'You Lose';
  return 'Tie';
}

const winner = findWinner(player1Choice, player2Choice);

class RPS extends Component(props) {
  // state = { toggle: true };
  // toggleToggle = () => this.setState({ toggle: !this.state.toggle });

  render() {
    //const { toggle } = this.state;
    return (
      <div>
        <h1>Lets play Rock Paper Scissors</h1>
        <h2>Choose your weapon...</h2>
        <Choices />
        <Result winner = {winner}/>
        <Button />   
      </div>
    );
  }
}

export default RPS