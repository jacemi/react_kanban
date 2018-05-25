
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priority').del()
    .then(function () {
      // Inserts seed entries
      return knex('priority').insert([
        {name: "Low"},
        {name: "Medium"},
        {name: "High"},
        {name: "Blocker"}
      ]);
    });
};
