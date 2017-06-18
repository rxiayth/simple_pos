import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu'
import Cart from './Cart/Cart.js'
import ActionBar from './Action/ActionBar.js'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: {}, // has the properties of drink.
			inventory: {}, // sku : volume
			cart: {}, // sku : {productName : name, quantity : n, price : x}
			disabledMenuItem: [] // list of sku
		}

		this.updateCart = this.updateCart.bind(this);

		this.clear = this.clear.bind(this);
		this.purchase = this.purchase.bind(this);
		this.cancel = this.cancel.bind(this);
		this.settings = this.settings.bind(this);
	}

	componentWillMount() {
		const DRINK_LIST = [
			'keith',			'gin',
			'captain_morgan',	'vodka',
			'coke',				'sake',
			'wine',				'pombay',
			'soju',				'water', //10
			'7up',				'juice',
			'americano',		'latte',
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
					updateCart={this.updateCart}
					disabledMenuItem= {this.state.disabledMenuItem}
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

	updateCart(sku, quantity) {
		var product = this.state.menu[sku];
		var productName = product.productName;
		var isAlreadyInCart = sku in this.state.cart;
		var originalQuantity = (isAlreadyInCart ? this.state.cart[sku].quantity : 0);
		var newQuantity = originalQuantity + quantity;
		var price = product.price;

		this.state.cart[sku] = {
			productName : productName,
			quantity : newQuantity,
			price : price
		};

		this.setState({cart : this.state.cart});
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

		this.setState({cart : this.state.cart});
		var isAvailable = this.checkAvailable(sku, quantity);
		if (!isAvailable){
			this.updateDisableMenuItem(sku);
			console.log('maxed out');
		}
	}


	checkAvailable(sku, quantity){
		return quantity < this.state.inventory[sku];

	}

	updateDisableMenuItem(sku) {
		var curDisabledMenuItem = this.state.disabledMenuItem;
		curDisabledMenuItem.push(sku);
		this.setState({disabledMenuItem: curDisabledMenuItem });
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
	}

	cancel() {
	}

	settings() {
	}
}

export default App;
