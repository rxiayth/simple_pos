let instance = null;

class Database {

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    authenticate(name, password) {
        // query database for name and password match.

        // hardcoded result
        let correctName = (name === "david" || name === "eric");
        let correctPassword = (password === "david" || password === "eric");
        return (correctName && correctPassword);
    }

}

export default Database;
