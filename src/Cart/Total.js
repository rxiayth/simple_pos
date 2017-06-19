import React, { Component } from 'react';

class Total extends Component {

    render() {
        let totalStyle = {
            height: '20%'
        }

        var total = this.props.total;
        return (
            <div style={totalStyle} >
                <div>
                    TOTAL:
                </div>
                <div>
                    {total}
                </div>
            </div>

        );
    }
}

export default Total;
