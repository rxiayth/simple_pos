import React, { Component } from 'react';

import ProductSearch from './ProductSearch';
import Cart from './Cart.js';
import Checkout from './Checkout.js';
import CONSTANTS from '../Constants.js';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage : CONSTANTS.PAGES.PRODUCTSEARCH,
            cart : {}
        }

        this.updateCurrentPage = this.updateCurrentPage.bind(this);
    }// constructor

    updateCurrentPage(pageName) {
        this.setState({currentPage : pageName});
    }// updateCurrentPage

    updateCart(sku, volume) {
        this.setState({cart : this.state.cart + volume});
    }// updateCart

    checkout() {
        for (let item in this.state.cart) {
            if (!this.state.cart.hasOwnProperty(item)) continue;
            this.props.updateInventory(item, this.state.cart[item]);
        }
    }// checkout

    render() {
        return (
            <div>
                {this._renderCurrentPage()}
            </div>
        );
    }// render

    _renderCurrentPage() {
        let result = <div></div>;
        switch (this.state.currentPage) {
            case (CONSTANTS.PAGES.PRODUCTSEARCH) : {
                result = (
                    <div>
                        <ProductSearch
                            searchProducts={this.props.searchProducts}
                            updateCart={this.updateCart}
                        />
                        <Cart
                            goToCheckOut={() =>
                                this.updateCurrentPage(CONSTANTS.PAGES.CHECKOUT)
                            }
                            updateCart={this.updateCart}
                        />
                    </div>
                );
                break;
            }
            case (CONSTANTS.PAGES.CHECKOUT) : {
                result = (
                    <div>
                        <Checkout
                            goBack={() =>
                                this.updateCurrentPage(CONSTANTS.PAGES.PRODUCTSEARCH)
                            }
                            checkout={this.checkout}
                        />
                    </div>
                );
                break;
            }
            default : {
            }
        }// switch
        return result;
    }// _renderCurrentPage
}// Home

export default Home;
