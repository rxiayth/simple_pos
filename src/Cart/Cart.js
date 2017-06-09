import React, { Component } from 'react';
import '../App.css';

class Cart extends Component {

    render() {
        return (
           <div className='cart' >
           		<div className='cartItems'>Items
           			{ console.dir(this.props.cart) }
           		</div>

           		<hr />
           		<div className='cartTotal'>Total:</div>
           
           </div>
        );
    }
}

export default Cart;
