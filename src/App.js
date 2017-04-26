import React, { Component } from 'react';
import './App.css';
import CartSidebar from './CartSidebar'
import Main from './Main';

class App extends Component {

	constructor(props) {
		super(props);
	    this.state = {
	    	cellActive: "none",
	        cellChecked: false,
			inventory: [],
			cart: {}
      	}
	}

	componentDidMount() {
		// pull inventory from database for store
		var inventory = {
			drinks : {
				 'beer' : 10
				,'gin' : 10
				,'rum' : 10
				,'sake' : 10
				,'soju' : 10
				,'vodka' : 10
				,'wine' : 10
				,'whiskey' : 10
				,'water' : 10
			}
		}
		var cart = {
			 'beer' : 0
			,'gin' : 0
			,'rum' : 0
			,'sake' : 0
			,'soju' : 0
			,'vodka' : 0
			,'wine' : 0
			,'whiskey' : 0
			,'water' : 0
		}
		this.setState({'inventory' : inventory});
		this.setState({'cart' : cart});
	}

    onClick(e, drinks) {
		this.setState({cellChecked : !this.state.cellChecked});
        this.setState({cellActive : drinks });
        e.target.classList.toggle("active");
    }

    render() {
        return (
            <div className="App">
                <CartSidebar cellActive={this.state.cellActive} cart={this.state.cart}/>
                <Main cellChecked={this.onClick.bind(this)} inventory={this.state.inventory} cart={this.state.cart}/>
            </div>
        );
    }
}

export default App;
