import React, { Component } from 'react';
import './UserGrid.css';
import UserCell from './UserCell.js';

class UserGrid extends Component {
  constructor(props) {
    super(props);
    
  }

    render() {
        var grid = [];
        for (var i = 1; i < 26; i++) {
          grid.push(<UserCell key={i} cellNumber={i} cellChecked={this.props.cellChecked}/>);
        };

        return (
           <div className="user-grid">
            {grid}
           </div>
        );
    }
}

export default UserGrid;
