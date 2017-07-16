import React, { Component } from 'react';
import ProductSearchResults from './ProductSearchResults';
import CONSTANTS from '../Constants.js';

class ProductSearch extends Component {
	constructor(props) {
        super(props);
        this.handleSearch.bind(this);
        this.handleSearchType.bind(this);
        this.state = {
        	queryType: CONSTANTS.DATABASE.NAME,
            cart: this.props.cart,
            searchResult: {}
        }
    }// constructor


    handleSearchType(queryType) {
    	this.setState({queryType});
    	this.handleSearch(queryType);
    }// handleSearchType

   	handleSearch(queryType=this.state.queryType) {
   		let query = this.refs.query.value;
        let searchResult = this.props.searchProducts(queryType, query);
        this.setState({searchResult});
		// result.map( (item) => {
		// 	this.props.updateCart(item.sku, 1);
		// });
    }// handleSearch

    render() {
	  	let productSearchStyle = {
            width: 'inherit',
            height: 200,
            backgroundColor: 'lightblue',
            textAlign: 'center'
        };

        let searchInputStyle = {
            width: 400
        }



        return (
            <div style={productSearchStyle}>
            	<input
					type="radio"
					name="queryType"
					defaultChecked="true"
            		onClick={ ()=> this.handleSearchType(CONSTANTS.DATABASE.NAME)}
				/> Name
            	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  	<input 
                    type="radio" 
                    name="queryType"
			  		onClick={ ()=> this.handleSearchType(CONSTANTS.DATABASE.SKU)} />SKU
			  	<br /><br />

            	<input 
                    id="query" 
                    style={searchInputStyle}
                    type="text" 
                    ref="query"
                    placeholder="Product Search"
            		onChange={ ()=> this.handleSearch()} />
                &nbsp;&nbsp;
                <ProductSearchResults searchResult={this.state.searchResult} />
            </div>
        );
    }// render
}// ProductSearch

export default ProductSearch;
