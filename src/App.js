import React, { Component } from 'react';
import DATABASE from './Database.js';
import DB from './Database/Database.js';
import CONSTANTS from './Constants.js';

import Login from './Main/Login.js';
import Logout from './Main/Logout.js';
import Home from './Main/Home.js';
import Inventory from './Main/Inventory.js';
import History from './Main/History.js';
import Cart from './Sidebar/Cart.js';
import Actionbar from './Actionbar/Actionbar.js';
import Topbar from './Topbar/Topbar.js'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {

			currentPage: CONSTANTS.PAGES.LOGIN,	// 1 default = main, 2 = settings
			pageComponents: { },
			isLoggedIn: false,
			errorMessage: '',

			// menu: {}, 				// { sku: {name, price, sku} }
			// inventory: {}, 			// { sku : quantity }
			// cart: {}, 				// { sku : {name, price, quantity, isMaxedOut} }
			// maxedOutList: [], 		// [ sku1, sku2, sku3]

		}
		this.updateCurrentPage = this.updateCurrentPage.bind(this);
		this.login = this.login.bind(this);

		// this.updateCart = this.updateCart.bind(this);
		// updatein, update curp.
		// this.clear = this.clear.bind(this);
		// this.purchase = this.purchase.bind(this);
		// this.cancel = this.cancel.bind(this);
		// this.settings = this.settings.bind(this);
	}

	componentWillMount() {
		let pageComponents = {};
	 	pageComponents[CONSTANTS.PAGES.LOGIN] = Login;
	 	pageComponents[CONSTANTS.PAGES.LOGOUT] = Logout;
		pageComponents[CONSTANTS.PAGES.HOME] = Home;
		pageComponents[CONSTANTS.PAGES.INVENTORY] = Inventory;
		pageComponents[CONSTANTS.PAGES.HISTORY] = History;
	
		// console.log(pageComponents);
		this.setState({pageComponents})

	}

	/*	initializes state 'menu' with DrinkList from Database.js
	    () --> null
	*/
	// _initializeMenu() {
	// 	const drinks = DATABASE.DRINKS;
	// 	const volume = DATABASE.INVENTORY;

	// 	let menu = {};
	// 	let inventory = {};

	// 	// load the list of drinks into menu
	// 	drinks.map( (drink) => {
	// 		menu[drink.sku] = drink
	// 	});

	// 	// load the list of inventory into inventory
	// 	volume.map( (item) => {
	// 		inventory[item.sku] = item.quantity
	// 	});

	// 	// set state
	// 	this.setState({menu:menu});
	// 	this.setState({inventory:inventory});
	// }

	/* 	update state 'curerntPage' to given <page>
		(int) --> null
	*/
	updateCurrentPage(pageName) {
		this.setState({currentPage: pageName});
	}
	login(name,password) {
		let DBInstance =  DB.getInstance();
		let authenticationResult = DBInstance.authenticate(name,password);
		if (authenticationResult) {
			this.setState({ 
				isLoggedIn: true, 
				curretPage: CONSTANTS.PAGES.HOME
			});
		} else {
			this.setState({ errorMessage: "There is a mismatch between the username and password" })
		}

	}

    render() {
		// decide which main page to load
		const CurrentPage = this.state.pageComponents[this.state.currentPage];
		// console.log( CurrentPage)
		
        return (
        	<div>
        		<div className="toolbar">
	        		<Topbar 
	        			isLoggedIn={this.state.isLoggedIn}
	        			currentPage={this.state.currentPage}
	        			updateCurrentPage={this.updateCurrentPage} 
	        		/>
	        	</div>
	        	<div className="sidebar">
	        	</div>
        		<div className="main">
        			<CurrentPage 
        				errorMessage={this.state.errorMessage}
        				login={this.login}
        			/>
        		</div>

  
        		
    		</div>
        	
        );
    }

	/* 	updates one specific product in cart by certain amount.
	*	(str, int) --> null
	*/
 	updateCart(sku, quantity) {
		// const name = this.state.menu[sku].name;
		// const price = this.state.menu[sku].price;

		// let tmpCart = JSON.parse(JSON.stringify(this.state.cart));

		// const isInCart = sku in this.state.cart;
 	// 	let newQuantity = isInCart
		// 	? this.state.cart[sku].quantity + quantity
		// 	: quantity;

		// tmpCart[sku] = {
		// 	name : name,
		// 	price : price,
		// 	quantity : newQuantity
		// }

		// // delete possible 0 or -1 value from cart
		// if (newQuantity <= 0) {
		// 	delete tmpCart[sku];
		// }

 	// 	this.setState({cart:tmpCart})
 	}

	/* 	update inventory of product <sku> by amount of <quantity>
		(str, int) --> null
	*/
	updateInventory(sku, quantity) {
	}




	///////////////// clera below
	clear() {
		/*
			() --> ()
			sets cart to {};
		*/
		// this.state.cart = {};
		// this.setState({cart:this.state.cart});
	}

	purchase() {
		/*
			var confirmation = confirm("Confirm purchase ");
		*/

		// var curInventory = this.state.inventory;
		// for (var sku in this.state.cart) {
		// 	curInventory[sku] -= this.state.cart[sku].quantity;
		// };
		// this.setState({inventory: curInventory});
		// this.clear();
	}

	cancel() {
		/*
			save for later
		*/
	}

	// toggle currentPage number between 1(menu) and 2(setting)
	// () --> null
	settings() { // change menu section into settings section
		// let currentPage = this.state.currentPage;
		// this.setState({currentPage : (2 === currentPage) ? 1 : 2});
	}

	// return a copy of the state
	// (str) --> object
	copyState(stateName) {
	}
}

export default App;
