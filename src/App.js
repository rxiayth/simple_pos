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
			cart: {'item':'hi'}
		}
	}


	selectItem(e, item) {

		console.log(e.target.innerHTML)
		// this.setState({cart: this.state.cart })
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
			var volume = 10;
			var sku = 1003900 + i;
			var drink = {
				product_name : product_name,
				price : price,
				volume : volume,
				sku : sku
			}
			this.state.inventory[drink.sku] = drink;
		}

		this.setState({'inventory':this.state.inventory});
	}

    render() {
        return (
            <div className="App">
				<Menu 
					inventory={this.state.inventory}
					selectItem={this.selectItem}
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
