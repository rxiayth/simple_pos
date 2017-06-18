import React, { Component } from 'react';
import '../App.css';
import MenuItem from './MenuItem.js';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.updateCart = this.updateCart.bind(this);
        this.selectMenuItem = this.selectMenuItem.bind(this); 


    }

    selectMenuItem(sku) {
        this.updateCart(sku);
        this.updateDisableMenuItem(sku);
    }
    updateCart(sku) {
        const name = this.state.menu[sku].name;
        const isAlreadyInCart = sku in this.state.cart;
        const quantity = (isAlreadyInCart ? this.state.cart[sku].quantity+1 : 1);
        // get quantiy prameter, use quantity instaed of if 1

        const price = this.state.menu[sku].price;

        this.state.cart[sku] = {
            name,
            quantity,
            price
        };

        this.setState({cart : this.state.cart});
    }
    isInStock(sku){
        const quantity = this.state.cart[sku].quantity;
        return quantity < this.state.inventory[sku];
    }
    // try and see if we can generalize, and se eif we can use it somewer else
    updateDisableMenuItem(sku) {
        const itemInStock = this.isInStock(sku);
        if (!itemInStock) {
            const curDisabledMenuItem = this.state.disabledMenuItem;
            curDisabledMenuItem.push(sku);
            this.setState({disabledMenuItem: curDisabledMenuItem });
            console.log('maxed out');
        }
    }
    selectMenuItem(sku) {
        this.props.updateCart(sku, 1);
    }

    // prbly gonna need a function to communicate menu <-> menu item
    // and menu <-> app for disabled menuDisplay

    updateDisable() {
        // input :
        // output :
        // what its doing
    }



    render() {
        const menu = this.props.menu;
        // console.dir(menu);
        let menuDisplay = Object.keys(menu).map( (sku) => {
            console.dir(menu[sku]);
            <MenuItem
                key={sku}
                item={menu[sku]}
                selectMenuItem={this.selectMenuItem}
                // availability={ !(sku in this.props.disabledMenuItem) }
            />
        });

        console.log(menuDisplay);

         
        // update css into style
        return (
            <div className='menu' >
                {menuDisplay}
            </div>
        );
    }

  
}

export default Menu;
