import React, { Component } from 'react';
import './App.css';
import UserGrid from './MainComponents/UserGrid.js'
import Toolbar from './ToolbarComponents/Toolbar.js'

class Main extends Component {
     render() {
        return (

            <div className="app-right">

                <div className="app-navbar">
                    {/*  <p> app-top-menu </p> */}
                    <Toolbar />
                </div>

                <div className="app-user-grid" >
                    {/*  <p>User Grid</p> */}
                    <UserGrid cellChecked={this.props.cellChecked} inventory={this.props.inventory}/>
                </div>

            </div>

        );
    }
}

export default Main;
