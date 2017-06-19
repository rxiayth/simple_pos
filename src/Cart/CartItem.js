import React, { Component } from 'react';

class CartItem extends Component {

    render() {
        let cartItemStyle = {
            height: '10%',
            width: '100%',
            backgroundColor: 'teal'
        }

        var name = this.props.name;
        var quantity = this.props.quantity;

        return (
            <div style={cartItemStyle}>
                {name}
                {quantity}
            </div>
        );
    }
}

export default CartItem;
