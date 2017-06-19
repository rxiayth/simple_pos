import React, { Component } from 'react';
import DATABASE from './Database.js'
import Menu from './Menu/Menu.js'
import Cart from './Cart/Cart.js'
import ActionBar from './Action/ActionBar.js'
import Setting from './Setting/Setting.js'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			menu: {}, 				// { sku: {name, price, sku} }
			inventory: {}, 			// { sku : quantity }
			cart: {}, 				// { sku : {name, price, quantity, isMaxedOut} }
			maxedOutList: [], 		// [ sku1, sku2, sku3]
			currentPage: 1			// 1 default = menu, 2 = settings

		}

		this.clear = this.clear.bind(this);
		this.purchase = this.purchase.bind(this);
		this.cancel = this.cancel.bind(this);
		this.settings = this.settings.bind(this);
		this.updateCart = this.updateCart.bind(this);
		this.getCartQuantity = this.getCartQuantity.bind(this);
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

		console.dir(menu);
		console.dir(inventory);

		this.state.menu = menu;
		this.state.inventory = inventory;	
		this.setState({menu:this.state.menu});
		this.setState({inventory:this.state.inventory});
	}

    render() {

		let appStyle = {
			height: 600,
			width: 800
		}

		let mainPage = null;
		if (this.state.currentPage === 1) {
			mainPage =
			<Menu
				menu={this.state.menu}
				disabledMenuItem= {this.state.disabledMenuItem}
				selectMenuItem={this.selectMenuItem}
				updateCart={this.updateCart}
			/>;
		} else if (this.state.currentPage === 2) {
			mainPage =
			<Setting
			/>;
		}

        return (
            <div style={appStyle}>
				{mainPage}
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

	updateCart(action, sku) {
        /* 
            (action, sku) --> ()
            updates cart for display
        */
        let quantity = this.getCartQuantity(sku);
        quantity = this.updateQuantity(action, quantity);
        const drink = this.state.menu[sku];
        
        if (quantity > 0 && !(sku in this.state.maxedOutList)){
            this.state.cart[sku] = {
                name: drink.name,
                quantity: quantity,
                price: drink.price
            }
            this.setState({cart:this.state.cart});
        } 
        if (quantity == this.state.inventory[sku]){
            console.log('maxed');
            this.state.maxedOutList.push(sku);
            this.setState({maxedOutList:this.state.maxedOutList});
        }

        console.dir(this.state.cart[sku].quantity);
    }

    getCartQuantity(sku) {
        /*
            returns quantity in cart
        */
        return (sku in this.state.cart)? this.state.cart[sku].quantity : 0;
    }
    updateQuantity(action, quantity) {
        /*
            returns new quantity; inc or dec accordingly
        */
        switch(action) {
            case 'increment':
                return quantity + 1;
                break;
            case 'decrement':
                return quantity -1;
                break;
            default:
                console.warn('no actions passed to updateCart');
        }
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

	// toggle currentPage number between 1(menu) and 2(setting)
	// () --> null
	settings() { // change menu section into settings section
		let currentPage = this.state.currentPage;
		this.setState({currentPage : (2 === currentPage) ? 1 : 2});
	}
}

export default App;
