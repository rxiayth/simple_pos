import React, { Component } from 'react';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.incrementCartItem = this.incrementCartItem.bind(this);

    }

    incrementCartItem(sku) {
        /* 
            (sku) --> ()
            increment cart item quantity count
        */
        console.log(this);
        this.props.updateCart('increment', sku);
    }

    decrementCartItem(sku) {
        /* 
            (sku) --> ()
            decrement cart item quantity count
        */
        // console.log('removing clicked', sku);
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
                    incrementCartItem={this.incrementCartItem}
                    decrementCartItem={this.decrementCartItem}
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
