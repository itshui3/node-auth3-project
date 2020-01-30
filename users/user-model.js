require('dotenv').config();

const knex = require('knex');

const config = require('../knexfile')[process.env.ENVIRONMENT];

const db = knex(config);

module.exports = {
  find, // find() - general fetch all
  findByHaus, // findByHaus(haus) - fetch by haus
}

function find() {
  return db('users');
}

function findByHaus(haus) {
  return db('users').where({ haus });
}