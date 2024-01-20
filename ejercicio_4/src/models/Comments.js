const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');

const Comments = sequelize.define('comments', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  commnent: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [200, 1000]
    }
  }
});

// Videos.hasMany(Collaborators, {
//   foreignKey: 'videoID',
//   sourceKey: 'id'
// })



module.exports = Comments;