const { sequelize } = require('../db/postgreSQL.js');
const { DataTypes } = require('sequelize');
const Collaborators = require('./Collaborators.js');
const Users = require('./Users.js');
const Reviews = require('./Reviews.js');
const Comments = require('./Comments.js');
const Authors = require('./Authors.js');


const Videos = sequelize.define('videos', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [2, 300]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      len: [2, 300]
    }
  }
});

// Relaciones para Videos

Videos.hasMany(Collaborators, {
  foreignKey: 'colaboratorsId',
  sourceKey: 'id'
})

Videos.hasMany(Comments, {
  primaryKey: 'commentsId',
  sourceKey: 'id'
})

Videos.hasMany(Reviews, {
  primaryKey: 'reviewsId',
  sourceKey: 'id'
})

Videos.hasOne(Authors, {
  foreignKey: 'authorId',
  sourceKey: 'id'
})

Videos.belongsTo(Users, {
  foreignKey: 'authorId',
  sourceKey: 'id'
})

module.exports = Videos;