import React, { Component } from 'react';
import CONSTANTS from '../Constants.js';

class Topbar extends Component {

    constructor(props) {
        super(props);

        this._handleClick.bind(this);
    }

    _handleClick(pageName) {
        this.props.updateCurrentPage(pageName);
    }

    render() {
        var tabStyle = {
            width : '15%',
            height : '80%',
            float : 'left',
            textAlign : 'center',
            backgroundColor: 'gray'
        };

        if (this.props.isLoggedIn){
            return (
                <div>
                    <div
                        style={tabStyle}
                        onClick={() => this._handleClick(CONSTANTS.PAGES.LOGOUT)}
                        >
                        {CONSTANTS.PAGES.LOGOUT}
                    </div>
                    <div
                        style={tabStyle}
                        onClick={() => this._handleClick(CONSTANTS.PAGES.HOME)}
                        >
                        {CONSTANTS.PAGES.HOME}
                    </div>
                    <div
                        style={tabStyle}
                        onClick={() => this._handleClick(CONSTANTS.PAGES.INVENTORY)}
                        >
                        {CONSTANTS.PAGES.INVENTORY}
                    </div>
                    <div
                        style={tabStyle}
                        onClick={() => this._handleClick(CONSTANTS.PAGES.HISTORY)}
                        >
                        {CONSTANTS.PAGES.HISTORY}
                    </div>
                </div>
            )
        } else {
            return (
                 <div>
                    <div
                        style={tabStyle}
                        onClick={() => this._handleClick(CONSTANTS.PAGES.LOGIN)}
                        >
                        {CONSTANTS.PAGES.LOGIN}
                    </div> 
                </div>
            )
        }
            
    }
}

export default Topbar;
