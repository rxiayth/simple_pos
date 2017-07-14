import React, { Component } from 'react';

import CONSTANTS from './Constants.js';
import Database from './Database/Database.js';

import Login from './Main/Login.js';
import Home from './Main/Home.js';
import Inventory from './Main/Inventory.js';
import History from './Main/History.js';

import Topbar from './Topbar/Topbar.js'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {

			currentPage: CONSTANTS.PAGES.LOGIN,	// 1 default = main, 2 = settings
			pageComponents: {},
			isLoggedIn: false,
			errorMessage: '',

		}
		this.updateCurrentPage = this.updateCurrentPage.bind(this);
		this.login = this.login.bind(this);
	}

	componentWillMount() {
		let pageComponents = {};
	 	pageComponents[CONSTANTS.PAGES.LOGIN] = Login;
		pageComponents[CONSTANTS.PAGES.HOME] = Home;
		pageComponents[CONSTANTS.PAGES.INVENTORY] = Inventory;
		pageComponents[CONSTANTS.PAGES.HISTORY] = History;

		this.setState({pageComponents})

	}

	updateCurrentPage(pageName) {
		switch(pageName) {
			case (CONSTANTS.PAGES.LOGOUT) : {
				this.setState({isLoggedIn : false});
				this.setState({currentPage : CONSTANTS.PAGES.LOGIN});
				break;
			}
			default: {
				this.setState({currentPage: pageName});
			}
		};
	}

	login(name,password) {
		let database =  Database.getInstance();
		let successfulAuthentication = database.authenticate(name,password);
		if (successfulAuthentication) {
			this.setState({
				isLoggedIn: true,
				currentPage: CONSTANTS.PAGES.HOME
			});
		} else {
			this.setState({
				errorMessage: 'There is a mismatch between the username and password'
			});
		}
	}

    render() {
		const CurrentPage = this.state.pageComponents[this.state.currentPage];

        return (
        	<div>
        		<div className="topbar">
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
}
export default App;
