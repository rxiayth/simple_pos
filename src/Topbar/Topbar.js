import React, { Component } from 'react';

import CONSTANTS from '../Constants.js';
import Button from '../Common/Button.js';

class Topbar extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this._loadStyle();
    }


    _loadStyle() {
        let style = {};

        let unhighlightedTab = {
            minWidth : '25%',
            height : '80%',
            float : 'left',
            textAlign : 'center',
            backgroundColor: 'gray'
        };

        let topBarStyle = {
            textAlign: 'justify'
        }

        style['unhighlightedTab'] = unhighlightedTab;
        style['topBarStyle'] = topBarStyle;

        this.setState({style});
    }

    render() {
        if (this.props.isLoggedIn) {
            return this._renderLoggedIn();
        } else { // !isLoggedIn
            return this._renderLoggedOut();
        }
    }// render

    _renderLoggedIn() {
        return (
            <div style={this.state.style.topBarStyle}>
                <Button
                    name={CONSTANTS.PAGES.LOGOUT}
                    style={this.state.style.unhighlightedTab}
                    func={() => this.props.logout()}
                />
                <Button
                    name={CONSTANTS.PAGES.HOME}
                    style={this.state.style.unhighlightedTab}
                    func={() =>
                        this.props.updateCurrentPage(CONSTANTS.PAGES.HOME)}
                />
                <Button
                    name={CONSTANTS.PAGES.INVENTORY}
                    style={this.state.style.unhighlightedTab}
                    func={() =>
                        this.props.updateCurrentPage(CONSTANTS.PAGES.INVENTORY)}
                />
                <Button
                    name={CONSTANTS.PAGES.HISTORY}
                    style={this.state.style.unhighlightedTab}
                    func={() =>
                        this.props.updateCurrentPage(CONSTANTS.PAGES.HISTORY)}
                />
            </div>
        );
    }// _renderLoggedIn

    _renderLoggedOut(tabStyle) {
        return (
            <div style={this.state.style.topBarStyle}>
                <Button
                    name={CONSTANTS.PAGES.LOGIN}
                    style={this.state.style.unhighlightedTab}
                    func={() => this.handleOnClick(CONSTANTS.PAGES.LOGIN)}
                />
            </div>
        );
    }// _renderLoggedOut

}// class

export default Topbar;
