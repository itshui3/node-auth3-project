const db = require('knex')(require('../knexfile').development);

module.exports = {
  addUser, // addUser(user)
  getUserByUsername, // getUserByUsername(username);
}

// I need to be able to insert a new user by register

function addUser(user) {
  return db('users').insert(user);
}

function getUserByUsername(username) {
  return db('users').where({ username });
}