
exports.up = function(knex) {
  return knex.schema
    .createTable('depts', table => {
      table.increments().unsigned();
      table.string('dept_name', 128)
        .notNullable()
        .unique();
    })
    .createTable('users', table => {
      table.increments().unsigned();
      table.string('username', 128)
        .notNullable()
        .unique();

      table.integer('dept_id')
        .unsigned()
        .references('id')
        .inTable('depts')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('depts');
};
