import React, { Component } from 'react';
import CartItem from './CartItem.js';
import Total from './Total.js';

class Cart extends Component {

    render() {

        let cartStyle = {
            cart: {
                height: '100%',
                width: '100%'
            },
            cartList : {
                height: '80%',
                width: '100%',
                overflow: 'scroll',
                overflowX: 'hidden',
                float: 'left'
            },
            cartTotal : {
                height: '20%',
                width: '100%'
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
                        updateCart={this.props.udpateCart}
                    />
                );

                total += (price * quantity);
            }
        }

        return (
            <div style={cartStyle.cart}>
                <div style={cartStyle.cartList}>
                    {cartItems}
                </div>
                <hr />
                <div style={cartStyle.cartTotal}>
                    <Total
                        total={total}
                    />
                </div>
           </div>
        );
    }

    // add +/- button
}

export default Cart;
