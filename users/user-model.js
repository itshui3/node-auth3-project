require('dotenv').config();

const knex = require('knex');

const config = require('../knexfile')[process.env.ENVIRONMENT];

const db = knex(config);

module.exports = {
  find, // find() - general fetch all

}

function find() {
  return db('users');
}