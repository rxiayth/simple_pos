import React, { Component } from 'react';
import '../App.css';
import CartItem from './CartItem.js';
import Total from './Total.js';

class Cart extends Component {

    render() {

        let cartStyle = {
            height: 400,
            width: 200,
            backgroundColor: 'lightblue',
            position: 'absolute',
            left: 600,
            top: 0
        }

        let cartItemStyle = {
            height: '80%',
            overflow: 'scroll',
            overflowX: 'hidden'
        };

        var cartItems = [];
        var total = 0;

        for (var sku in this.props.cart) {
            if (this.props.cart.hasOwnProperty(sku)) {
                var productName = this.props.cart[sku].productName;
                var quantity = this.props.cart[sku].quantity;
                var price = this.props.cart[sku].price;

                cartItems.push(
                    <CartItem
                        key={sku}
                        productName={productName}
                        quantity={quantity}
                    />
                );

                total += (price * quantity);
            }
        }

        return (
            <div style={cartStyle}>
                <div style={cartItemStyle}>
                    {cartItems}
                </div>
                <hr />
                <Total
                    total={total.toFixed(2)}
                />
           </div>
        );
    }

    // add +/- button
}

export default Cart;
