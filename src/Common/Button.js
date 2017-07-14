import React, { Component } from 'react';

class Button extends Component {

    // pass as prop:
    // style
    //  height
    //  width
    //  backgroundColor
    // function
    // name

    render() {
        return (
            <div
                style={this.props.style}
                onClick={() => this.props.func()}
                >
                {this.props.name ? this.props.name : 'BUTTON'}
            </div>
        );
    }
}

// Button.propTypes = {
//     func : PropTypes.func.isRequired,
//
//     height : PropTypes.any.isRequired,
//     width : PropTypes.any.isRequired,
// }
export default Button;
