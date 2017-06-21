import React, { Component } from 'react';
class Action extends Component {

	render() {
		var actionStyle = {
			height: '50%',
			width: '50%',
			float: 'left',
			textAlign: 'center',
		}

		return (
			<div style={actionStyle} onClick={this.props.func}>
				{this.props.name}
			</div>
		)
	}
}

export default Action;
