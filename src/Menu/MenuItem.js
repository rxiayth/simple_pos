import React, { Component } from 'react';

class MenuItem extends Component {

    constructor(props) {
      super(props);

      this.onSelectMenuItem = this.onSelectMenuItem.bind(this);
    }

    // call onSelect func passed from Menu
    // () --> null
    onSelectMenuItem() {
        this.props.onSelect(this.props.item.sku);
    }

    render() {
        let menuItemstyle = {
            height: '20%',
            width: '20%',
            float: 'left'
        };

        return (
            <div style={menuItemstyle} onClick={this.onSelectMenuItem}>
                {this.props.item.productName}
                <br/>
                {'$' + this.props.item.price}
            </div>
        )
    }

}

export default MenuItem;
