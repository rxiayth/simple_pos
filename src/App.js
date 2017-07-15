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

			currentPage: CONSTANTS.PAGES.LOGIN,
			pageComponents: {},
			isLoggedIn: false,
			errorMessage: '',
			database : Database.getInstance()
		}
		this.updateCurrentPage = this.updateCurrentPage.bind(this);
		this.searchProducts = this.searchProducts.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}// constructor

	componentWillMount() {
		let pageComponents = {};
	 	pageComponents[CONSTANTS.PAGES.LOGIN] = Login;
		pageComponents[CONSTANTS.PAGES.HOME] = Home;
		pageComponents[CONSTANTS.PAGES.INVENTORY] = Inventory;
		pageComponents[CONSTANTS.PAGES.HISTORY] = History;

		this.setState({pageComponents})
	}// componentWillMount

	updateCurrentPage(pageName) {
		this.setState({currentPage: pageName});
	}// updateCurrentPage

	searchProducts(searchType, searchPhrase) {
		this.state.database.queryProducts(searchType, searchPhrase);
	}// searchProducts

	login(name,password) {
		let database =  Database.getInstance();
		let successfulAuthentication = database.authenticate(name,password);
		if (successfulAuthentication) {
			this.setState({
				isLoggedIn: true,
				currentPage: CONSTANTS.PAGES.HOME,
				errorMessage: ''
			});
		} else {
			this.setState({
				errorMessage: 'There is a mismatch between the username and password'
			});
		}
	}// login

	logout() {
		this.setState({isLoggedIn : false});
		this.setState({currentPage : CONSTANTS.PAGES.LOGIN});
	}// logout

    render() {
		const CurrentPage = this.state.pageComponents[this.state.currentPage];

        return (
        	<div>
        		<div className="topbar">
	        		<Topbar
	        			isLoggedIn={this.state.isLoggedIn}
	        			currentPage={this.state.currentPage}
	        			updateCurrentPage={this.updateCurrentPage}
						logout={this.logout}
	        		/>
	        	</div>
        		<div className="main">
        			<CurrentPage
        				errorMessage={this.state.errorMessage}
        				login={this.login}
        			/>
        		</div>
    		</div>
        );
    }// render
}// App

export default App;
