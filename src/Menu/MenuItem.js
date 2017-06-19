import React, { Component } from 'react';

class MenuItem extends Component {
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        // this.incrementCartItem = this.incrementCartItem.bind(this);
    }
  
   
    onClick(e) {
        e.preventDefault();
        // console.log(this.props.item.sku);
        this.incrementCartItem(this.props.item.sku);
    }
    
    incrementCartItem(sku) {
        this.props.incrementCartItem(sku);
    }
    // decrementCartItem(sku) {
    //     this.props.decrementCartItem(this.props.item.sku);
    // }


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
                <button onClick={this.onClick}> ++++ </button>
                <button onClick={this.props.incrementCartItem}> + </button>
                <button onClick={this.props.decrementCartItem}> - </button>

                
            </div>
        )
    }

}

export default MenuItem;
