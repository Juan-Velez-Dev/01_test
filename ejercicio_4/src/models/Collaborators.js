const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');

const Collaborators = sequelize.define('collaborators', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['editer', 'cameraman', 'admin', 'designer' ]],
        msg: 'Debe de definir el role del colaborador'
      }
    }
  }
});

module.exports = Collaborators;