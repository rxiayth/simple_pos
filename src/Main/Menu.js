import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(sku, quantity) {
        this.props.updateCart(sku, quantity);
    }

    render() {
        let menuStyle = {
            height: '100%',
            width: '100%',
        };

        const menu = this.props.menu;
        return (
            <div style={menuStyle}>
                {Object.keys(menu).map((sku) => {
                    return (
                        <MenuItem
                            key={sku}
                            item={menu[sku]}
                            onSelect={this.onSelect}
                        />
                    );
                })};
            </div>
        );
    }
}

export default Menu;
