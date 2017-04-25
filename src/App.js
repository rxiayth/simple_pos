import React, { Component } from 'react';
import './App.css';
import AppLeft from './AppLeft'
import AppRight from './AppRight';

class App extends Component {

	constructor(props) {
		super(props);
	    this.state = {
	    	cellActive: "none",
	        cellChecked: false,
			inventory: []
      	}
	}

	componentDidMount() {
		// pull inventory from database
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
		this.setState({'inventory' : inventory});
	}

    onClick(e, drinks) {
		this.setState({cellChecked : !this.state.cellChecked});
        this.setState({cellActive : drinks });
        e.target.classList.toggle("active");
    }

    render() {
        return (
            <div className="App">
                <AppLeft cellActive={this.state.cellActive} />
                <AppRight cellChecked={this.onClick.bind(this)} inventory={this.state.inventory} />
            </div>
        );
    }
}

export default App;
