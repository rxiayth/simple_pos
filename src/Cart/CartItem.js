import React, { Component } from 'react';
import '../App.css';

class CartItem extends Component {

    render() {
        var productName = this.props.productName;
        var quantity = this.props.quantity;

        return (
            <div>
                {productName} : {quantity}
            </div>
        );
    }
}

export default CartItem;
