import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'
import Actions from './Actions/Actions'

class App extends Component {

	// needs callback onclick function

	constructor(props) {
		super(props);
		this.state = {
			inventory: {},
			cart: {}
		}
	}

	componentWillMount() {
		// load inventory
		var beer = {
			'product_name' : 'beer',
			'price':'1.23',
			'volume':10,
			'sku': 1003918 // random unique
		};
		this.state.inventory[beer.sku] = beer;

		// repeat for 25 items
		var gin = {
			'product_name' : 'gin',
			'price':'1.23',
			'volume':10,
			'sku': 1003917
		};
		this.state.inventory[gin.sku] = gin;

		this.setState({'inventory':this.state.inventory});
	}

    render() {
        return (
            <div className="App">
				<Menu inventory={this.props.inventory} /><Cart /><Actions />
            </div>
        );
    }
}

export default App;
