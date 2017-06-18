import React, { Component } from 'react';
import '../App.css';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    // this.props.menu should have 25 items in it
    // this.props.selectMenuItem should be function from App.js
    constructor(props) {
      super(props);
      this.selectMenuItem = this.selectMenuItem.bind(this);

    }

    render() {
        var menuItems = [];
        for (var sku in this.props.menu) {
            {/*
            'hasOwnPropery' is needed because it's possible to insert keys
            into the prototype object of 'this.props.menu'.
            link: https://stackoverflow.com/questions/558981/getting-a-list-of-associative-array-keys
            */}

            if (this.props.menu.hasOwnProperty(sku) ) {
                menuItems.push(
                    <MenuItem
                        key={sku}
                        item={this.props.menu[sku]}
                        selectMenuItem={this.selectMenuItem}
                        availability={ !(sku in this.props.disabledMenuItem) }
                    />
                );
            }
        }

        return (
            <div className='menu' >
                {menuItems}
            </div>
        );
    }

    selectMenuItem(sku) {
        this.props.updateCart(sku, 1);
    }

}

export default Menu;
