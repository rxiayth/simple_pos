import React, { Component } from 'react';
import './App.css';

class AppLeft extends Component {
    render() {
        return (
            
            <div className="app-left">
                
                <div className="app-user-counter">
                    <p>COUNTER: [COUNTER]</p>
                </div>

                <div className="app-user-list">
                    <p>USER LIST: [USERS]</p>
                </div>

                <div className="app-user-detail">
                    <p>USER DETAIL: [USER]</p>
                    <p>{this.props.cellActive}</p>
                </div>

            </div>

        );
    }
}

export default AppLeft;
