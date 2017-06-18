import React, { Component } from 'react';
import './App.css';
import DATABASE from './Database.js'
import Menu from './Menu/Menu.js'
import Cart from './Cart/Cart.js'
import ActionBar from './Action/ActionBar.js'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: {}, 				// {sku: {name, price, sku, quantity} }
			inventory: {}, 			// {sku : quantity}
			cart: {}, 				// {sku : {name, price, quantity} }
			disabledMenuItem: [] 	// [sku1, sku2, sku3]
		}

		this.clear = this.clear.bind(this);
		this.purchase = this.purchase.bind(this);
		this.cancel = this.cancel.bind(this);
		this.settings = this.settings.bind(this);
	}

	componentWillMount() {
		/*  
			() --> ()
			why we load this here again? 
		*/

		this.initializeDrinkList();
	}

	initializeDrinkList() {
		/*  
			() --> ()
			initializes App with Drinks 
		*/
		
		const DRINKS = DATABASE.DRINKS;
		const INVENTORY = DATABASE.INVENTORY;
		let menu = {};
		let inventory = {};
		DRINKS.map( (drink) => {
			menu[drink.sku] = drink 
		});

		INVENTORY.map( (item) => {
			inventory[item.sku] = item.quantity
		});

		// console.dir(menu);
		// console.dir(inventory);

		this.state.menu = menu;
		this.state.inventory = inventory;	
		this.setState({menu:this.state.menu});
		this.setState({inventory:this.state.inventory});
	}

    render() {
        return (
            <div className='App'>
				<Menu
					menu={this.state.menu}
					inventory={this.state.inventory}
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

	clear() {
		/* 
			() --> ()
			sets cart to {};
		*/
		this.state.cart = {};
		this.setState({cart:this.state.cart});
	}

	purchase() {
		/*
			var confirmation = confirm("Confirm purchase ");
		*/
		
			var curInventory = this.state.inventory;
			for (var sku in this.state.cart) {
				curInventory[sku] -= this.state.cart[sku].quantity;
			};
			this.setState({inventory: curInventory});
			this.clear();
	}

	cancel() { 
		/*
			save for later
		*/
	}

	settings() { 
		/*
			change menu section into settings section
		*/
	}
}

export default App;
