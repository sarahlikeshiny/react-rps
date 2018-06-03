import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rock from '../../assets/rock.jpg';
import paper from '../../assets/paper.jpg';
import scissor from '../../assets/scissors.jpg';

//how to get choice from here to rps screen? 
class Choices extends Component(props) {
render() {
		return (
			<div>
				<img className="choice choice-rock" src={rock} alt={"rock"}/>
                <img className="choice choice-paper" src={paper} alt={"paper"}/>
                <img className="choice choice-scissor" src={scissor} alt={"scissor"}/>
			</div>
        )
    }
}

Choice.PropTypes = {
    player1Choice: PropTypes.string.isRequired
}

export default Choices