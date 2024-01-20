const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');
const Videos = require('./Videos.js');
const Authors = require('./Authors.js');
const Users = require('./Users.js');
const Reviews = sequelize.define('reviews', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ratio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 100,
    }
  }
});


module.exports = Reviews;