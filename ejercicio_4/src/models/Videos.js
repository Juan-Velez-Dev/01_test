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

Videos.belongsToMany(Collaborators, {
  through: 'collaborators_video'
})

Videos.belongsToMany(Users, {
  through: 'users_video'
})

Videos.belongsToMany(Comments, {
  through: 'comments_video'
})

Videos.belongsToMany(Reviews, {
  through: 'reviews_video'
})

Videos.belongsTo(Authors, {
  foreignKey: 'authorId',
})


module.exports = Videos;