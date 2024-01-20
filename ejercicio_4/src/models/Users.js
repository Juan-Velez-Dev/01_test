const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');
const Reviews = require('./Reviews.js')

const Users = sequelize.define('users', {
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
      len: [2, 30]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  }
});

Users.hasMany(Reviews, {
  foreignKey: 'userId',
  sourceKey: 'id'
})

module.exports = Users;