import React, { Component } from 'react';
import CartItem from './CartItem.js';
import Total from './Total.js';

class Cart extends Component {

    render() {

        let cartStyle = {
            cart : {
                height: 400,
                width: 200,
                backgroundColor: 'lightblue',
                position: 'absolute',
                left: 600,
                top: 0
            },
            cartItemList : {
                height: '80%',
                overflow: 'scroll',
                overflowX: 'hidden'
            }
        };

        let cartItems = [];
        let total = 0;

        for (let sku in this.props.cart) {
            if (this.props.cart.hasOwnProperty(sku)) {
                let name = this.props.cart[sku].name;
                let quantity = this.props.cart[sku].quantity;
                let price = this.props.cart[sku].price;

                cartItems.push(
                    <CartItem
                        key={sku} 
                        name={name}
                        quantity={quantity}
                    />
                );

                total += (price * quantity);
            }
        }

        return (
            <div style={cartStyle.cart}>
                <div style={cartStyle.cartItemList}>
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
