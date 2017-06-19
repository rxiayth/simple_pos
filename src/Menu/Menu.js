import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let menuStyle = {
            height: 600,
            width: 600,
            backgroundColor: 'yellow',
			position: 'absolute'
        };

        var menuItems = [];
        for (var sku in this.props.menu) {
            if (this.props.menu.hasOwnProperty(sku) ) {
                menuItems.push(
                    <MenuItem
                        key={sku}
                        item={this.props.menu[sku]}
                        onSelect={this.handleClick}
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

    // call updateCart in App.js to increment item in cart by 1
    // (int) --> null
    handleClick(sku) {
        this.props.updateCart(sku, 1);
    }

    updateDisable() {
        // input :
        // output :
        // what its doing
    }
}

export default Menu;
