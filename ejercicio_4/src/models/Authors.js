const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');
const Videos = require('./Videos.js')

const Authors = sequelize.define('authors', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5, 30]
    }
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [100, 1000]
    }
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  }
});



module.exports = Authors;