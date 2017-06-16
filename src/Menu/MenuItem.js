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
            <div className={(this.props.availability)? "a":"b"} onClick={this.onClick}>
                {this.props.item.productName} <br/>
                {'$' + this.props.item.price}
            </div>
        )
    }
}

export default MenuItem;
