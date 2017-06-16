import React, { Component } from 'react';
import '../App.css';

class Total extends Component {

    render() {
        var style = {
            total : {
                backgroundColor : 'red'
            }
        }
        // var total = this.props.total;

        var total = this.props.total;
        return (
            <div>
                <div style={style}>
                    TOTAL:
                </div>
                <div className='price'>
                    {total}
                </div>
            </div>

        );
    }
}

export default Total;
