
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments().unsigned();
    table.string('username', 128).notNullable().unique();
    table.string('password', 60).notNullable();
    table.string('haus', 20);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};