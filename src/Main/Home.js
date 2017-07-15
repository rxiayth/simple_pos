import React, { Component } from 'react';
import ProductSearch from './ProductSearch'
import Cart from './Cart.js'
import Checkout from './Checkout.js'
class Home extends Component {

    render() {
        return (
            <div>
                <ProductSearch />
                <Cart />
            </div>
        );
    }
}

export default Home;
