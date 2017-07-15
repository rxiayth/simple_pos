import DATABASE from './DatabaseFile.js';
import CONSTANTS from '../Constants.js';

let instance = null;

class Database {

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    constructor() {
        // used for hardcoded results in queryProducts
        this._loadInventory();
    }

    _loadInventory() {
        // used for hardcoded results in queryProducts

        let drinks = {};
        for (let i = 0; i < DATABASE.DRINKS.length; i++) {
            let drink = DATABASE.DRINKS[i];
            drinks[drink.sku] = drink;
        };
        this.drinks = drinks;
        this.inventory = DATABASE.INVENTORY.inventory;
    }

    authenticate(name, password) {
        // query database for name and password match.

        // hardcoded result
        // let correctName = (name === "david" || name === "eric");
        // let correctPassword = (password === "david" || password === "eric");
        // return (correctName && correctPassword);
        return true;
    }// authenticate

    queryProducts(searchType, searchPhrase) {
        // query database for products by either name or sku.

        // hardcoded results
        let result = [];
        switch (searchType) {
            case (CONSTANTS.DATABASE.NAME) : {
                result = this._queryProductsByName(searchPhrase);
                break;
            };
            case (CONSTANTS.DATABASE.SKU) : {
                result = this._queryProductsBySku(searchPhrase);
                break;
            };
        }// switch
        return result;
    }// queryProducts

    _queryProductsByName(searchPhrase) {
        let result = [];
        for (let key in this.drinks) {
            if (!this.drinks.hasOwnProperty(key)) continue;

            let drink = this.drinks[key];
            if (drink.name.toLowerCase().includes(searchPhrase.toLowerCase())) {
                result.push(drink);
            };
        };
        return result;
    }// _queryProductsByname

    _queryProductsBySku(searchPhrase) {
        let result = [];
        for (let key in this.drinks) {
            if (!this.drinks.hasOwnProperty(key)) continue;

            if (key.includes(searchPhrase)) {
                result.push(this.drinks[key]);
            };
        };
        return result;
    }// _queryProductsBySku

}// Database

export default Database;
