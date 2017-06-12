import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu'
import Cart from './Cart/Cart.js'
import Actions from './Actions/Actions.js'

class App extends Component {

	// needs callback onclick function

	constructor(props) {
		super(props);
		this.state = {
			menu: {}, // has the properties of drink.
			inventory: {}, // sku : volume
			cart: {}
		}

		this.selectMenuItem = this.selectMenuItem.bind(this);
	}

	componentWillMount() {
		const DRINK_LIST = [
			'keith',			'gin',
			'captain_morgan',	'vodka',
			'coke',				'sake',
			'wine',				'pombay',
			'soju',				'water', //10
			'7up',				'juice',
			'1',				'2',
			'3',				'4',
			'5',				'6',
			'7',				'8', //20
			'9',				'10',
			'11',				'12',
			'13'
		];

		const NUM_OF_ITEMS = 25;
		for (var i = 0; i < NUM_OF_ITEMS; i++) {
			var productName = DRINK_LIST[i];
			var price = 1+(Math.floor(Math.random() * i * 100)/100).toFixed(2);
			var sku = 1003900 + i;
			var drink = {
				productName : productName,
				price : price,
				sku : sku
			}
			this.state.menu[drink.sku] = drink;
			this.state.inventory[drink.sku] = 10;
		}

		this.setState({menu:this.state.menu});
		this.setState({inventory:this.state.inventory});
	}

    render() {
        return (
            <div className='App'>
				<Menu
					menu={this.state.menu}
					selectMenuItem={this.selectMenuItem}
				/>
				<Cart
					cart={this.state.cart}
				/>
				<Actions />
            </div>
        );
    }

	selectMenuItem(sku) {
		var productName = this.state.menu[sku].productName;
		var isAlreadyInCart = sku in this.state.cart;
		var quantity = (isAlreadyInCart ? this.state.cart[sku].quantity+1 : 1);
		var price = this.state.menu[sku].price;

		this.state.cart[sku] = {
			productName : productName,
			quantity : quantity,
			price : price
		};
		// this.state.cart[sku].productName = productName;
		// this.state.cart[sku].quantity = quantity;
		// this.state.cart[sku].price = price;

		this.setState({cart : this.state.cart});
	}
}

export default App;
