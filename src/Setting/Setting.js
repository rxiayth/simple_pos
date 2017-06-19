import React, { Component } from 'react';

class Setting extends Component {

    render() {
        let settingStyle = {
            margin: 0,
            height: 600,
            width: 600,
            backgroundColor: 'pink',
			position: 'absolute'
        }

        return (
            <div style={settingStyle}>
                <h3> SETTINGS PAGE </h3>
            </div>
        );
    }

}
export default Setting;
