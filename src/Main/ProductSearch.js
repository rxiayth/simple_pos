import React, { Component } from 'react';

class ProductSearch extends Component {
	constructor(props) {
        super(props);
        this.handleSearch.bind(this);
        this.handleSearchType.bind(this);
        this.state = {
        	queryType: "name"
        }
    }// constructor


    handleSearchType(queryType) {
    	this.setState({queryType});
    	console.log(queryType);
    	this.handleSearch(queryType);
    }// handleSearchType

   	handleSearch(queryType=this.state.queryType) {
   		let query = this.refs.query.value;
        console.log("Search", query, queryType);
    }// handleSearch



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

                ProductSearch
            </div>
        );
    }// render
}// ProductSearch

export default ProductSearch;
