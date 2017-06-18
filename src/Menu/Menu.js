import React, { Component } from 'react';
import '../App.css';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
      super(props);
      this.selectMenuItem = this.selectMenuItem.bind(this);
    }

    render() {
        let menuStyle = {
            height: 600,
            width: 600,
            backgroundColor: 'yellow'
        };

        var menuItems = [];
        for (var sku in this.props.menu) {
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
            <div style={menuStyle}>
                {menuItems}
            </div>
        );
    }

    selectMenuItem(sku) {
        this.props.updateCart(sku, 1);
    }

    // prbly gonna need a function to communicate menu <-> menu item
    // and menu <-> app for disabled menuitems

    updateDisable() {
        // input :
        // output :
        // what its doing
    }
}

export default Menu;
