import React, { Component } from 'react';
import DRINK_LIST from './Database.js' // change to json
import Menu from './Menu/Menu.js'
import Cart from './Cart/Cart.js'
import ActionBar from './Action/ActionBar.js'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: {}, 				// {sku: {name, price, sku} }
			inventory: {}, 			// {sku : quantity}
			cart: {}, 				// {sku : {name, price, quantity} }
			disabledMenuItem: [] 	// [sku1, sku2, sku3]
		}

		this.updateCart = this.updateCart.bind(this);
		this.selectMenuItem = this.selectMenuItem.bind(this); // don't need, try to hcnage to _helper and mainFunction

		this.clear = this.clear.bind(this);
		this.purchase = this.purchase.bind(this);
		this.cancel = this.cancel.bind(this);
		this.settings = this.settings.bind(this);
	}

	componentWillMount() {
		this.initializeDrinkList();
	}

	initializeDrinkList() {
		// set price, don't random
		for (var i in DRINK_LIST) {
			var name = DRINK_LIST[i];
			var price = 1+(Math.floor(Math.random() * i * 100)/100).toFixed(2);
			var sku = 1003900 + i;
			var drink = {
				name,
				price,
				sku
			}
			this.state.menu[sku] = drink;
			this.state.inventory[sku] = 10;
		}

		this.setState({menu:this.state.menu});
		this.setState({inventory:this.state.inventory});
	}

    render() {

		let appStyle = {
			height: 600,
			width: 800
		}

        return (
            <div style={appStyle}>
				<Menu
					menu={this.state.menu}
					disabledMenuItem= {this.state.disabledMenuItem}
					selectMenuItem={this.selectMenuItem}
					updateCart={this.updateCart}
				/>
				<Cart
					cart={this.state.cart}
				/>
				<ActionBar
					clear={this.clear}
					purchase={this.purchase}
					cancel={this.cancel}
					settings={this.settings}
				/>
            </div>
        );
    }

	selectMenuItem(sku) {
		this.updateCart(sku);
		this.updateDisableMenuItem(sku);
	}

	updateCart(sku) {
		const name = this.state.menu[sku].name;
		const isAlreadyInCart = sku in this.state.cart;
		const quantity = (isAlreadyInCart ? this.state.cart[sku].quantity+1 : 1);
		// get quantiy prameter, use quantity instaed of if 1

		const price = this.state.menu[sku].price;

		this.state.cart[sku] = {
			name,
			quantity,
			price
		};

		this.setState({cart : this.state.cart});
	}

	// try and see if we can generalize, and se eif we can use it somewer else
	updateDisableMenuItem(sku) {
		const itemInStock = this.isInStock(sku);
		if (!itemInStock) {
			const curDisabledMenuItem = this.state.disabledMenuItem;
			curDisabledMenuItem.push(sku);
			this.setState({disabledMenuItem: curDisabledMenuItem });
			console.log('maxed out');
		}
	}

	// helper?
	isInStock(sku){
		const quantity = this.state.cart[sku].quantity;
		return quantity < this.state.inventory[sku];

	}


	clear() {
		this.state.cart = {};
		this.setState({cart:this.state.cart});
	}

	purchase() {
		// var confirmation = confirm("Confirm purchase ");
		// if (confirmation) {
			var curInventory = this.state.inventory;

			for (var sku in this.state.cart) {
				curInventory[sku] -= this.state.cart[sku].quantity;
			};
			this.setState({inventory: curInventory});
			this.clear();
		// }
		// forgot to clear cart
	}

	cancel() { // save for later
	}

	settings() { // change menu section into settings section
	}
}

export default App;
