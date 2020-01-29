const makeItCleanClean = require('knex-cleaner');
exports.seed = function(knex) {
  return makeItCleanClean.clean(knex);
};
