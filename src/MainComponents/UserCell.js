import React, { Component } from 'react';
import './UserCell.css';

class UserCell extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.addOne = this.addOne.bind(this);
        this.removeOne = this.removeOne.bind(this);

        this.state = {
            quantity : 0
        }
  	}

    onClick(e) {
        console.log('test');
        console.log('drink : ' + this.props.drinks + ' says hi');
        this.props.cellChecked(e, this.props.drinks);
        // this.addOne();
    }

    addOne() {
        var quantity = this.state.quantity;
        var volume = this.props.volume;
        if (quantity >= volume) {
            console.log("NO MORE");
            return;
        }
        this.setState({'quantity' : this.state.quantity+1});
    }

    removeOne() {
        var quantity = this.state.quantity;
        if (quantity <= 0) return;
        this.setState({'quantity' : this.state.quantity-1});
    }

    render() {
        return (
            <div className="user-cell"
                id={this.props.drinks}
                onClick={this.onClick}
            >
            	{this.props.drinks}
                <br/>
                {this.state.quantity}
                <button className="add-button" onClick={this.addOne}>add</button>
                <button className="remove-button" onClick={this.removeOne}>remove</button>

            </div>
        );
    }

}

export default UserCell;
