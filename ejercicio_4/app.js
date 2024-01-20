const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const { sequelize } = require('./src/db/postgreSQL.js')
const cors = require('cors');

// Models
require('./src/models/Videos.js')
require('./src/models/Authors.js')
require('./src/models/Collaborators.js')
require('./src/models/Users.js')
require('./src/models/Reviews.js')
require('./src/models/Comments.js')

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes



// Server

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.sync({force: true});
    console.log('DB Conected');
    await app.listen(PORT);
    console.log(`Server listening on ${PORT}`)
  } catch (error) {
    throw new Error(`Error: ${error.message}`)
  }
}

main();