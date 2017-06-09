import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {

    // this.props.inventory should have 25 items in it
    // this.props.menuClick should be function from App.js
    constructor(props) {
      super(props);
    }


    render() {
        var buttons = [];

        return (
           <div className='menu' >
              
                { Object.keys(this.props.inventory).map( 
                    (key) => {
                        return (  
                            <div 
                                key={key} 
                                onClick={this.props.selectItem.bind(this)}> 
                                {this.props.inventory[key].product_name} 
                            </div>)
                         }
                )}

           {/* 5x5 buttons */}
           </div>
        );
    }
}

export default Menu;
