import React, { Component } from 'react';
import '../App.css';

class Total extends Component {

    render() {
        var style = {
            total : {
                backgroundColor : 'red',
            }
        }

        var total = this.props.total;
        return (
            <div style={style}>
                <div>
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
