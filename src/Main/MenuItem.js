import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    /*  call parent's onSelect function with this item's sku and given <quantity>.
        (int) --> null
    */
    addToCart(quantity) {
        this.props.onSelect(this.props.item.sku, quantity);
    }

    render() {
        let menuItemstyle = {
            height: '20%',
            width: '20%',
            float: 'left',
            backgroundColor: 'yellow'
        };

        return (
            <div style={menuItemstyle}>
                {this.props.item.name}<br/>
                {'$' + this.props.item.price}<br/>
                <button onClick={() => this.addToCart(10)}> ++++ </button>
                <button onClick={() => this.addToCart(1)}> + </button>
                <button onClick={() => this.addToCart(-1)}> - </button>
            </div>
        )
    }

}

export default MenuItem;
