import React, { Component } from 'react';

import Button from '../Common/Button.js';

class Login extends Component {

    constructor(props) {
        super(props);

        this.handleLogin.bind(this);
    }

    handleLogin() {
        let name = this.refs.name.value;
        let password = this.refs.password.value;
        // console.log("LOGIN.JS - handleOnClick \n" +
        //             "\tname = " + name + "\n" +
        //             "\tpassword = " + password);
        this.props.login(name, password);
    }

    render() {
        return (
            <div>
                {this._renderLoginForm()}
                {this._renderErrorMessage()}
            </div>
        );
    }

    _renderLoginForm() {
        let loginStyle = {
            width: 100,
            height: 25,
            backgroundColor: 'white',
            textAlign: 'center'
        };

        return (
            <div>
                <input type="text" ref="name" />
                <input type="password" ref="password" />
                <Button
                    name={'LOGIN'}
                    style={loginStyle}
                    func={() => this.handleLogin()}
                    />
            </div>
        );
    }

    _renderErrorMessage() {
        return (
            <div>
                {this.props.errorMessage}
            </div>
        );
    }
}

export default Login;
