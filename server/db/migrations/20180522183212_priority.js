
exports.up = function (knex, Promise) {
  return knex.schema.createTable('priority', table => {
    table.increments('id');
    table.string('name', 25).unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('priority');
};
