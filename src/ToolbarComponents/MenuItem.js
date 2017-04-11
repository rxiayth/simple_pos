import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MenuItem.css';

class MenuItem extends Component {

    componentDidMount() {
        var menu_name = this.props.menu_name;
        var menu_link = this.props.menu_link;
        var print_menu_name = function() {
            console.log('you clicked ' + menu_name);
            console.log('link of this button is : ' + menu_link);
        };
        ReactDOM.findDOMNode(this).addEventListener('click', print_menu_name);
  	}

    render() {
        var menu_name = this.props.menu_name;

        return (
            // button of the name
            // button onclick will pop up new main screen thingy
            <div className="menu-item {menu_name}">
                {menu_name}
            </div>
        );
    }
}

export default MenuItem;
