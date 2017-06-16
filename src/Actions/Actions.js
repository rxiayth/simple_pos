import React, { Component } from 'react';
import '../App.css';
import Action from './Action.js';

class Actions extends Component {

    render() {
        const TYPES_OF_ACTIONS = {
            purchase : {
                name : 'PURCHASE',
                func : this.props.purchase
            }
        }
        return (
           <div className='actions' >
           		<div className='cta purchase'>Purchase</div>
           		<div className='cta clear'>Clear</div>
           		<div className='cta cancel'>Cancel</div>
           		<div className='cta settings'>Setting</div>

                <Action
                    name={action.purchase.name}
                    func={action.purchase.func}
                />

                <Action
                    name={action.clear.name}
                    func={action.clear.func}
                />

                <Action
                    name={action.cancel.name}
                    func={action.cancel.func}
                />

                <Action
                    name={action.settings.name}
                    func={action.settings.func}
                />
           </div>
        );
    }
}

export default Actions;
