import Login from './Main/Login'

const CONSTANTS = {
    ACTIONS : {
        PURCHASE : 'PURCHASE',
        CLEAR : 'CLEAR',
        CANCEL : 'CANCEL',
        SETTINGS : 'SETTINGS'
    },
    PAGES : {
        LOGIN : Login,
        MAIN : 'MAIN',
        SETTINGS : 'SETTINGS',
        HOME : 'HOME',
        INVENTORY : 'INVENTORY',
        HISTORY : 'HISTORY'
    }
};

export default CONSTANTS;
