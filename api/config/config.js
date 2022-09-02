const env = require("dotenv");
env.config();

module.exports = {
    "development": {
        "username": process.env.USER_MYSQL_DEV,
        "password": process.env.PASSWORD_MYSQL_DEV,
        "database": process.env.DATABASE_MYSQL_DEV,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}