
exports.up = function(knex) {
  return knex.schema.table('users', table => {
    table.string('password', 60)
      .notNullable()
      
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', table => {
    table.dropColumn('password');
  })
};
