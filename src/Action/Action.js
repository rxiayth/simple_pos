import React, { Component } from 'react';
import '../App.css';
class Action extends React.Component {
	render() {
		return ( 
			<div className='cta' onClick={this.props.func}>
				{this.props.name}
			</div>
		)
	}
}

export default Action;