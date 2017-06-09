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

	selectMenuItem(sku) {
		var name = this.state.menu[sku].product_name;
		var alreadyInCart = name in this.state.cart;
		var volume = (alreadyInCart ? this.state.cart[name]+1 : 1);

		this.state.cart[name] = volume;
		this.setState({cart : this.state.cart});
	}

	componentWillMount() {
		const NUM_OF_ITEMS = 25;
		const DRINK_LIST = [
			'keith',
			'gin',
			'captain_morgan',
			'vodka',
			'coke',
			'sake',
			'wine',
			'pombay',
			'soju',
			'water', //10
			'7up',
			'juice',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8', //20
			'9',
			'10',
			'11',
			'12',
			'13'
		]

		for (var i = 0; i < NUM_OF_ITEMS; i++) {
			var product_name = DRINK_LIST[i];
			var price = Math.floor(Math.random() * i * 100)/100;
			var sku = 1003900 + i;
			var drink = {
				product_name : product_name,
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
}

export default App;
