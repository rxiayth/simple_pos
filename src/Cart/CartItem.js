import React, { Component } from 'react';

class CartItem extends Component {

    render() {

        var productName = this.props.productName;
        var quantity = this.props.quantity;

        return (
            <div>
                <div> {/* or style= xxx */}
                    {productName}
                </div>
                <div>
                    {quantity}
                </div>
            </div>
        );
    }
        // +/- button
}

export default CartItem;
