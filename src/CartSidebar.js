import React, { Component } from 'react';
import './App.css';

class CartSidebar extends Component {

    render() {
        var cart = this.props.cart;
        var cartDisplay = {};
        for (var key in cart){
            if (cart.hasOwnProperty(key) && cart[key] > 0) {
                console.log(key);
            }
        }

        return (
            
            <div className="cart-sidebar">
                
                <div className="cart-summary">
                    <p>Cart</p>
                    <table> 
                    <thead>
                        <tr>
                            <th>drink</th>
                            <th>quantity</th>
                            <th>price</th>
                        </tr>   
                    </thead>
                    <tbody>
                    </tbody>
                 {/*
                        <tr>
                            <td>rum</td>
                            <td>3</td>
                            <td>$10</td>
                        </tr>
                        <tr>
                            <td>water</td>
                            <td>5</td>
                            <td>$20</td>
                        </tr>
                        <tr>
                            <td>gin</td>
                            <td>1</td>
                            <td>$30</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td></td>
                            <td></td>
                        </tr>
                 
                
                */}

                     
                    </table>
                </div>

                
                <button className="order">
                    <p>Order</p>
                </button>
            

            </div>

        );
    }
}

export default CartSidebar;
