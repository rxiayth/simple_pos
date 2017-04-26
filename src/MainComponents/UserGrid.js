import React, { Component } from 'react';
import './UserGrid.css';
import UserCell from './UserCell.js';

class UserGrid extends Component {

    render() {
        var grid = [];
        var drinks = [
             'beer'
            ,'gin'
            ,'rum'
            ,'sake'
            ,'soju'
            ,'vodka'
            ,'wine'
            ,'whiskey'
            ,'water'
        ];

        for (var i = 1; i <= 9; i++) {
            var drink = drinks[i-1];
            if (typeof this.props.inventory.drinks !== 'undefined') {
                var volume=this.props.inventory.drinks[drink];
                grid.push(<UserCell key={i} drinks={drinks[i-1]} volume={volume} cellChecked={this.props.cellChecked}/>);
            }

        };

        return (
           <div className="user-grid">
                {grid}
           </div>
        );
    }
}

export default UserGrid;
