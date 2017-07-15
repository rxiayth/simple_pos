import React, { Component } from 'react';

import ProductSearch from './ProductSearch';
import Cart from './Cart.js';
import Checkout from './Checkout.js';
import CONSTANTS from '../Constants.js';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage : CONSTANTS.PAGES.PRODUCTSEARCH
        }

        this.updateCurrentPage = this.updateCurrentPage.bind(this);
    }

    updateCurrentPage(pageName) {
        this.setState({currentPage : pageName});
    }// updateCurrentPage


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
                        <ProductSearch />
                        <Cart
                            goToCheckOut={() =>
                                this.updateCurrentPage(CONSTANTS.PAGES.CHECKOUT)
                            }
                        />
                    </div>
                );
                break;
            };
            case (CONSTANTS.PAGES.CHECKOUT) : {
                result = (
                    <div>
                        <Checkout />
                    </div>
                );
                break;
            }
        }// switch
        return result;
    }// _renderCurrentPage
}// Home

export default Home;
