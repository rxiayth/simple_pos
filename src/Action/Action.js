import React, { Component } from 'react';
class Action extends Component {

	render() {
		var actionStyle = {
			height: '50%',
			width: '50%',
			margin: '-1px',
			float: 'left',
			textAlign: 'center',
			border: '1px solid black'
		}

		return (
			<div onClick={this.props.func}>
				{this.props.name}
			</div>
		)
	}
}

export default Action;
