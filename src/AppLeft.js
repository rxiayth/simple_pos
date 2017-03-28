import React, { Component } from 'react';
import './App.css';

class AppLeft extends Component {
    render() {
        return (
            
            <div className="App-left">
                
                <div className="App-user-counter">
                    <p>COUNTER: [COUNTER]</p>
                </div>

                <div className="App-user-list">
                    <p>USER LIST: [USERS]</p>
                </div>

                <div className="App-user-detail">
                    <p>USER DETAIL: [USER]</p>
                </div>

            </div>

        );
    }
}

export default AppLeft;
