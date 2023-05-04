//use bit.io for relational database
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("DBCONNECTION_URL+sslmode=true");
module.exports = sequelize;

//nosql-mongodb