
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments('id');
    table.string('title', 100).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('status_id').unsigned();
    table.foreign('status_id').references('id').inTable('status');
    table.integer('priority_id').unsigned();
    table.foreign('priority_id').references('id').inTable('priority');
    table.integer('assignee_id').unsigned();
    table.foreign('assignee_id').references('id').inTable('users');
    table.integer('creator_id').unsigned();
    table.foreign('creator_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');

};
