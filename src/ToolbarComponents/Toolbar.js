import React, { Component } from 'react';
import './Toolbar.css';
import MenuItem from './MenuItem.js';


class Toolbar extends Component {
    static MENU_HOME = "HOME";
    static MENU_LOGIN = "LOGIN";
    static MENU_SETTINGS = "SETTINGS";

    static MENU_HOME_LINK = "home_link";
    static MENU_LOGIN_LINK = "login_link";
    static MENU_SETTINGS_LINK = "settings_link";

    render() {
        return (
            <div>
                <MenuItem
                    menu_name={Toolbar.MENU_HOME}
                    menu_link={Toolbar.MENU_HOME_LINK}
                />
                <MenuItem
                    menu_name={Toolbar.MENU_LOGIN}
                    menu_link={Toolbar.MENU_LOGIN_LINK}
                />
                <MenuItem
                    menu_name={Toolbar.MENU_SETTINGS}
                    menu_link={Toolbar.MENU_SETTINGS_LINK}
                />
            </div>
        );
    }
}

export default Toolbar;
