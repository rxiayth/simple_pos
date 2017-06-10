import React, { Component } from 'react';
import '../App.css';

class Cart extends Component {

    render() {
        var cartItems = [];
        for (var name in this.props.cart) {
            if ( this.props.cart.hasOwnProperty(name)) {
                cartItems.push(
                    <div>
                        {name + ' : ' + this.props.cart[name]}
                    </div>
                );
                /*
                cartItems.push(
                    <MenuItem
                        productName=name
                        quantity=this.props.cart[name]
                    />
                );
                */
                console.log(name + this.props.cart[name]);
            }
        }
        return (
            <div className='cart' >
                <div className='cartItems' >
                    {cartItems}
                </div>

                <hr />
                <div className='cartTotal'>Total:</div>
           </div>
        );
    }
}

export default Cart;
