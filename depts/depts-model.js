const db = require('knex')(require('../knexfile').development);

module.exports = {
  findHausByName, // findHausByName(hausName);

}

// i need a helper that can find the haus by name and return the hausbody

function findHausByName(hausName) {
  return db('depts').where({ dept_name: hausName }).first();
}
// might not be retuyrning the correct value, check in console