import React, { Component } from 'react';
import '../App.css';

class CartItem extends Component {

    render() {
        var productName = this.props.productName;
        var quantity = this.props.quantity;

        return (
            <div>
                {productName} : {quantity}
                {/* change to below later : 
                <div className='productName'>
                    {productName}
                </div>
                <div className='quantity'>
                    {quantity}
                </div>
                */}
            </div>
        );
    }
}

export default CartItem;
