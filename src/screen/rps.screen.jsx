import React, { Component } from 'react';
import Button from '../components/button/button.component'
import Result from '../components/result/result.component'
import Choices from '../components/choices/choices.component'

class RPS extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div>
        <h1>Lets play Rock Paper Scissors</h1>
        <h2>Choose your weapon...</h2>
        <Choices />
        <Result />
        <Button />   
      </div>
    );
  }
}

export default RPS