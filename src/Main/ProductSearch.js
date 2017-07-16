import React, { Component } from 'react';
import ProductSearchResult from './ProductSearchResults'

class ProductSearch extends Component {
	constructor(props) {
        super(props);
        this.handleSearch.bind(this);
        this.handleSearchType.bind(this);
        this.state = {
        	queryType: "name",
            cart: this.props.cart
        }
    }


    handleSearchType(queryType) {
    	this.setState({queryType});
    	console.log(queryType);
    	this.handleSearch(queryType);
    }
   	
   	handleSearch(queryType=this.state.queryType) {
   		let query = this.refs.query.value;
        // console.log("Search", query, queryType);
        return [ {
            name: 'Crown Royal',
            price: '11',
            sku: '00101'
        },
        {
            name: 'Grant\'s',
            price: '12',
            sku: '00102'
        },
        {
            name: 'J&B',
            price: '13',
            sku: '00103'
        }]
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

            	<input type="radio" name="queryType" value="name" defaultChecked="true" 
            		onClick={ ()=> this.handleSearchType("name")} /> Name 
            	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            
			  	<input type="radio" name="queryType" value="sku" 
			  		onClick={ ()=> this.handleSearchType("sku")} />SKU 
			  	<br /><br />
					

            	<input id="query" type="text" ref="query" 
            		onChange={ ()=> this.handleSearch()} />
                &nbsp;&nbsp;
                ProductSearch
                <ProductSearchResult cart={this.state.cart} />
            </div>
        );
    }
}

export default ProductSearch;
