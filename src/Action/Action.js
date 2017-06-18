import React, { Component } from 'react';
import '../App.css';
class Action extends React.Component {

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
			<div style={actionStyle} onClick={this.props.func}>
				{this.props.name}
			</div>
		)
	}
}

export default Action;
