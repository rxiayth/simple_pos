import DATABASE from './DatabaseFile.js';
import CONSTANTS from '../Constants.js';

let instance = null;

class Database {

    static getInstance() {
        if (!instance) {
            instance = new Database();
        }
        return instance;
    }// getInstance

    constructor() {
        // used for hardcoded results in queryProducts
        this._loadInventory();
    }// constuctor

    _loadInventory() {
        // used for hardcoded results in queryProducts

        let drinks = {};
        for (let i = 0; i < DATABASE.DRINKS.length; i++) {
            let drink = DATABASE.DRINKS[i];
            drinks[drink.sku] = drink;
        };
        this.drinks = drinks;

        let inventory = {};
        for (let i = 0; i < DATABASE.INVENTORY.length; i++) {
            let item = DATABASE.INVENTORY[i];
            inventory[item.sku] = item.quantity;
        }
        this.inventory = inventory;
    }// _loadInventory

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
            }
            case (CONSTANTS.DATABASE.SKU) : {
                result = this._queryProductsBySku(searchPhrase);
                break;
            }
            default : {
            }
        }// switch
        return result;
    }// queryProducts

    _queryProductsByName(searchPhrase) {
        let result = [];
        for (let sku in this.drinks) {
            if (!this.drinks.hasOwnProperty(sku)) continue;

            let drink = this.drinks[sku];
            if (drink.name.toLowerCase().includes(searchPhrase.toLowerCase())) {
                drink.quantity = this.inventory[sku];
                result.push(drink);
            };
        };
        return result;
    }// _queryProductsByname

    _queryProductsBySku(searchPhrase) {
        let result = [];
        for (let sku in this.drinks) {
            if (!this.drinks.hasOwnProperty(sku)) continue;

            if (sku.includes(searchPhrase)) {
                let drink = this.drinks[sku];
                drink.quantity = this.inventory[sku];
                result.push(drink);
            };
        };
        return result;
    }// _queryProductsBySku

    updateInventory(sku, volume) {
        this.inventory[sku] = this.inventor[sku] - volume;
    }// updateInventory

}// Database

export default Database;
