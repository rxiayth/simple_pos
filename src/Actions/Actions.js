import React, { Component } from 'react';
import '../App.css';

class Actions extends Component {

    render() {
        return (
           <div className='actions' >
           		<div className='cta purchase'>Purchase</div>
           		<div className='cta clear'>Clear</div>
           		<div className='cta cancel'>Cancel</div>
           		<div className='cta settings'>Setting</div>
           </div>
        );
    }
}

export default Actions;
