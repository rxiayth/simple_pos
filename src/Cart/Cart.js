import React, { Component } from 'react';
import '../App.css';
import CartItem from './CartItem.js';
import Total from './Total.js';

class Cart extends Component {

    render() {
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
            <div className='cart' >
                <div className='cartItems' >
                    {cartItems}
                </div>

                <hr />
                <Total
                    total={total.toFixed(2)}
                />
           </div>
        );
    }
}

export default Cart;
