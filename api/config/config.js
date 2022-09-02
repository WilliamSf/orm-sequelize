const env = require("dotenv");
env.config();

module.exports = {
    "development": {
        "username": process.env.USER_MYSQL_DEV,
        "password": process.env.PASSWORD_MYSQL_DEV,
        "database": process.env.DATABASE_MYSQL_DEV,
        "host": process.env.HOST_MYSQL_DEV,
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": process.env.USER_MYSQL_TEST,
        "password": process.env.PASSWORD_MYSQL_TEST,
        "database": process.env.DATABASE_MYSQL_TEST,
        "host": process.env.HOST_MYSQL_TEST,
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": process.env.USER_MYSQL_PROD,
        "password": process.env.PASSWORD_MYSQL_PROD,
        "database": process.env.DATABASE_MYSQL_PROD,
        "host": process.env.HOST_MYSQL_PROD,
        "dialect": "mysql",
        "operatorsAliases": false
    }
}