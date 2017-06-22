import React, { Component } from 'react';
import Action from './Action.js';

class Actionbar extends Component {

    render() {
        let actionBarStyle = {
            height: '100%',
            width: '100%',
        }

        const TYPES_OF_ACTIONS = {
            purchase : {
                name : 'PURCHASE',
                func : this.props.purchase
            },
            clear : {
                name : 'CLEAR',
                func : this.props.clear
            },
            cancel : {
                name : 'CANCEL',
                func : this.props.cancel
            },
            settings : {
                name : 'SETTINGS',
                func : this.props.settings
            }
        }

        // loop through instead of hardcoding 4
        // put upper limmit of 4, const MAX_ACTIONS = 4
        return (
            <div style={actionBarStyle}>
                <Action
                    name={TYPES_OF_ACTIONS.purchase.name}
                    func={TYPES_OF_ACTIONS.purchase.func}
                />

                <Action
                    name={TYPES_OF_ACTIONS.clear.name}
                    func={TYPES_OF_ACTIONS.clear.func}
                />

                <Action
                    name={TYPES_OF_ACTIONS.cancel.name}
                    func={TYPES_OF_ACTIONS.cancel.func}
                />

                <Action
                    name={TYPES_OF_ACTIONS.settings.name}
                    func={TYPES_OF_ACTIONS.settings.func}
                />
           </div>
        );
    }
}

export default Actionbar;