import React, { Component } from 'react';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
	}
	
class Button extends Component {
render() {
		return (
			<div>
				<button onClick={handleClick}>Reset</button>
			</div>
        )
    }
}

export default Button