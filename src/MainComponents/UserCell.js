import React, { Component } from 'react';
import './UserCell.css';
import ReactDOM from 'react-dom';

class UserCell extends Component {

    constructor(props) {
      super(props);
    }  

    componentDidMount() {
    	var cellNumber = ReactDOM.findDOMNode(this).getAttribute('id');
    	// console.log(this.props.reactKey)
        // console.log(cellNumber)

        // TODO: move the event listener outside
    	ReactDOM.findDOMNode(this).addEventListener('click',
    		function(){ 
                console.log('cellNumber: ' + cellNumber + ' says hi');
            });
  	}




    render() {
        return (
            <div className="user-cell" 
                id={this.props.cellNumber}     
                onClick={this.props.cellChecked}
            >
            	{this.props.cellNumber}
            </div>
        );
    }

}

export default UserCell;
