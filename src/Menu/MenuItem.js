import React, { Component } from 'react';
import '../App.css';

class MenuItem extends Component {

    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.selectMenuItem(this.props.item.sku);
    }

    render() {
        return (
            <div onClick={this.onClick}>
                {this.props.item.product_name}
            </div>
        )
    }
}

export default MenuItem;
