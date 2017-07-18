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
        this.updateCart = this.updateCart.bind(this);
    }// constructor

    updateCurrentPage(pageName) {
        this.setState({currentPage : pageName});
    }// updateCurrentPage

    updateCart(sku, volume) {
        let item = this.props.drinks[sku];
        if (!item.volume) item.volume = 0;
        item.volume += volume;

        let cart = this.state.cart;
        cart[sku] = item;

        this.setState({cart});
    }// updateCart

    checkout() {
        for (let sku in this.state.cart) {
            if (!this.state.cart.hasOwnProperty(sku)) continue;
            this.props.updateInventory(sku, this.state.cart[sku]);
        };
    }// checkout

    render() {
        return (
            <div>
                {this._renderCurrentPage()}
            </div>
        );
    }// render

    _renderCurrentPage() {
        switch (this.state.currentPage) {
            case (CONSTANTS.PAGES.PRODUCTSEARCH) : {
                return this._renderProductSearch();
            }
            case (CONSTANTS.PAGES.CHECKOUT) : {
                return this._renderCheckout();
            }
            default : {
                return <div></div>
            }
        }// switch
    }// _renderCurrentPage

    _renderProductSearch() {
        return (
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
                    cart={this.state.cart}
                />
            </div>
        );
    }// _renderProductSearch

    _renderCheckout() {
        return (
            <div>
                <Checkout
                    goBack={() =>
                        this.updateCurrentPage(CONSTANTS.PAGES.PRODUCTSEARCH)
                    }
                    checkout={this.checkout}
                />
            </div>
        );
    }// _renderCheckout
}// Home

export default Home;
