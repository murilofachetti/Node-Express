const Sequelize = require('sequelize');

const dbName = 'teste';
const dbUser = 'root';
const dbHost = 'localhost';
const dbPassword = '12345678';

const sequelize = new Sequelize (dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost,
})

module.exports = sequelize;