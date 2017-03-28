import React, { Component } from 'react';
import './App.css';
import UserGrid from './AppUserGridComponents/UserGrid.js'


class AppRight extends Component {
    render() {
        return (
            
            <div className="app-right">
                
                <div className="app-navbar">
                    <p> app-top-menu </p>
                </div>

                <div className="app-user-grid">
                    <p>User Grid</p>
                    <UserGrid />
                </div>

            </div>   

        );
    }
}

export default AppRight;
