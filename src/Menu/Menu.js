import React, { Component } from 'react';
import '../App.css';
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

    
    render() {
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
        
         
        // update css into style
        return (
            <div className='menu' >
                {menuDisplay}
            </div>
        );
    }  
}

export default Menu;
