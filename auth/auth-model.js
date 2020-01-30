require('dotenv').config();

const knex = require('knex');
const config = require('../knexfile')[process.env.ENVIRONMENT];
const db = knex(config);

module.exports = {
  registerAccount, // registerAccount(user)
  findUserByUsername, // findUserByUsername(username)
}

function registerAccount(user) {
  return db('users').insert(user).returning('*');
}

function findUserByUsername(username) {
  return db('users').where({ username }).first(); // first to returnj object rather than array
};