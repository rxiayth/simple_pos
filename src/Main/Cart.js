import React, { Component } from 'react'

class Cart extends Component {
	render (){
		let cartStyle = {
            width: 'inherit',
            height: 200,
            backgroundColor: 'lightgreen',
            textAlign: 'center'
        };
		return (
			<div style={cartStyle}>
				Cart
			</div> 
		);
	}
}

export default Cart;