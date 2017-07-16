import React, { Component } from 'react';
import ProductSearch from './ProductSearch'
import Cart from './Cart.js'
import Checkout from './Checkout.js'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cart:  [{
                name: 'Crown Royal',
                price: '11',
                sku: '00101',
                quantity: '1'
            },
            {
                name: 'Grant\'s',
                price: '12',
                sku: '00102',
                quantity: '1'
            },
            {
                name: 'J&B',
                price: '13',
                sku: '00103',
                quantity: '1'
            }]
		}
	}

	_updateCart() {
		return false;

	}

    render() {
        return (
            <div>
                <ProductSearch cart={this.state.cart} />
                <Cart cart={this.state.cart} />
            </div>
        );
    }
}

export default Home;
