import React, { Component } from 'react';
import './App.css';
import AppLeft from './AppLeft'
import AppRight from './AppRight';


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppLeft />
                <AppRight />
            </div>
        );
    }
}

export default App;
