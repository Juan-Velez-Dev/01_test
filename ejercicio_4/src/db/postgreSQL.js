const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
  'Video-Manager', 
  'postgres',
  process.env.POSTGRES_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'postgres'
  }
); 

module.exports = {sequelize: sequelize}