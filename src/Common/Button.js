import React, { Component } from 'react';

class Button extends Component {

    render() {
        // height,
        // width
        // background color
        // image? - not necessary
        // function
        let name = this.props.name;
        let image = this.props.image;
        let func = this.props.func;

        let buttonStyle = {
            height : this.props.height;
            width : this.props.width;
            backgroundColor = this.props.backgroundColor;
        }

        return (
            <div style={buttonStyle} onClick={() => this.props.func())>
                {if (name !== null) this.props.name;}
            </div>
        );
    }
}

export default Button;
