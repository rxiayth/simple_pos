import React, { Component } from 'react';
import '../App.css';
import Action from './Action.js';

class ActionBar extends Component {

    render() {
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
        return (
            <div className="actions" >
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

export default ActionBar;
