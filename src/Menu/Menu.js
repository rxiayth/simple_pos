import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);

    }

    
    onSelect(sku, quantity) {
        this.props.updateCart(sku, quantity)
    }


         
        // update css into style
    render() {
        let menuStyle = {
            height: 600,
            width: 600,
            backgroundColor: 'yellow',
			position: 'absolute'
        };

        const menu = this.props.menu;        
        const menuDisplay = [];
        Object.keys(menu).map((sku) => {
            menuDisplay.push(
                <MenuItem
                    key={sku}
                    item={menu[sku]}
                    onSelect={this.onSelect}
                />
            );
        });

        return (
            <div style={menuStyle}>
                {menuDisplay}
            </div>
        );
    }

}

export default Menu;
