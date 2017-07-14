import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.handleOnClick.bind(this);
    }

    handleOnClick() {
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
                {this.isLoggedIn()}
                {this.errorMessage()}
            </div>
        );
    }

    isLoggedIn() {
        let isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <div> USER ALREADY LOGGED IN </div>
            );
        } else {
            return (
                <div>
                    <input type="text" ref="name" />
                    <input type="password" ref="password" />
                    <button onClick={() => this.handleOnClick()}>
                        LOGIN
                    </button>
                </div>
            );
        }
    }
    errorMessage() {
        return this.props.errorMessage;
    }
}

export default Login;
