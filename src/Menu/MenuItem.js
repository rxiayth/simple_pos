import React, { Component } from 'react';

class MenuItem extends Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.maxedOut = this.maxedOut.bind(this);
        this.incrementCartItem = this.incrementCartItem.bind(this);
        this.decrementCartItem = this.decrementCartItem.bind(this);
    }
  
   
    onClick(e) {
        e.preventDefault();

        // console.log(this.props.item.sku);
        this.incrementCartItem(this.props.item.sku);
    }

    maxedOut(sku) {
    }

    incrementCartItem() {
        this.props.onSelect(this.props.item.sku, +1);
    }
    decrementCartItem() {
        this.props.onSelect(this.props.item.sku, -1);
    }


 


    render() {
        let menuItemstyle = {
            height: '20%',
            width: '20%',
            float: 'left'
        };

        return (

            <div style={menuItemstyle} onClick={this.onSelectMenuItem}>
                {this.props.item.name}<br/>
                {'$' + this.props.item.price}<br/>
                <button onClick={this.maxedOut}> ++++ </button>
                <button onClick={this.incrementCartItem}> + </button>
                <button onClick={this.decrementCartItem}> - </button>

                
            </div>
        )
    }

}

export default MenuItem;
