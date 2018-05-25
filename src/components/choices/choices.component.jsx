import React, { Component } from 'react';
import rock from '../../assets/rock.jpg';
import paper from '../../assets/paper.jpg';
import scissor from '../../assets/scissors.jpg';

	
class Choices extends Component {
render() {
		return (
			<div>
				<img className="choice" src={rock} alt={"rock"}/>
                <img className="choice" src={paper} alt={"paper"}/>
                <img className="choice" src={scissor} alt={"scissor"}/>
			</div>
        )
    }
}

export default Choices