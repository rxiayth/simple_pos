import React, { Component, PropTypes } from 'react';

class Button extends Component {
    render() {
        return (
            <div
                style={this.props.style}
                onClick={() => this.props.func()}
                >
                {this.props.name}
            </div>
        );
    }// render
}// Button

Button.propTypes = {
    style : PropTypes.shape({
        height : PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        width : PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        backgroundColor : PropTypes.string
    }),
    func : PropTypes.func.isRequired,
    name : PropTypes.string.isRequired
}// propTypes

export default Button;
