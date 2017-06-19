import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        let cartItemStyle = {
            height: '10%',
            width: '100%',
            backgroundColor: 'teal'
        }

        var productName = this.props.productName;
        var quantity = this.props.quantity;

        return (
            <div style={cartItemStyle}>
                {productName}
                {quantity}
            </div>
        );
    }
}

export default CartItem;
