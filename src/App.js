import React, { Component } from 'react';
import './App.css';
import AppLeft from './AppLeft'
import AppRight from './AppRight';


class App extends Component {
	constructor(props) {
		super(props);
	    this.state = {
	    	cellActive: "none",
	        cellChecked: false
      	}
	}

    onClick(e) {
        this.state.cellChecked = !this.state.cellChecked;
        this.setState({cellActive : e.target.innerHTML });
        e.target.classList.toggle("active");
    }

    render() {
        return (
            <div className="App">
                <AppLeft cellActive = {this.state.cellActive} />
                <AppRight cellChecked = {this.onClick.bind(this)} />
            </div>
        );
    }
}

export default App;
