import React, { Component } from 'react';
import ProductSearchResult from './ProductSearchResults';
import CONSTANTS from '../Constants.js';

class ProductSearch extends Component {
	constructor(props) {
        super(props);
        this.handleSearch.bind(this);
        this.handleSearchType.bind(this);
        this.state = {
        	queryType: CONSTANTS.DATABASE.NAME,
            cart: this.props.cart
        }
    }// constructor


    handleSearchType(queryType) {
    	this.setState({queryType});
    	this.handleSearch(queryType);
    }// handleSearchType

   	handleSearch(queryType=this.state.queryType) {
   		let query = this.refs.query.value;
        let result = this.props.searchProducts(queryType, query);
		// result.map( (item) => {
		// 	this.props.updateCart(item.sku, 1);
		// });
    }

    render() {
	  	let productSearchStyle = {
            width: 'inherit',
            height: 300,
            backgroundColor: 'lightblue',
            textAlign: 'center'
        };



        return (
            <div style={productSearchStyle}>
            	<input
					type="radio"
					name="queryType"
					defaultChecked="true"
            		onClick={ ()=> this.handleSearchType(CONSTANTS.DATABASE.NAME)}
				/> Name
            	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<input type="radio" name="queryType"
			  		onClick={ ()=> this.handleSearchType(CONSTANTS.DATABASE.SKU)} />SKU
			  	<br /><br />


            	<input id="query" type="text" ref="query"
            		onChange={ ()=> this.handleSearch()} />
                &nbsp;&nbsp;
                ProductSearch
                <ProductSearchResult cart={this.state.cart} />
            </div>
        );
    }// render
}// ProductSearch

export default ProductSearch;
