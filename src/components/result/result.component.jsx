import React, { Component } from 'react';

class Result extends Component(props) {
	render() {
		return (
			<div>
				<p className = "result">{this.props.winner}</p>
			</div>
        )
    }
}

export default Result