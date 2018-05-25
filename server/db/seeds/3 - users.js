
const faker = require('faker');
const COUNT = 5;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const users = [];
      for (let index = 0; index < COUNT; index++) {
        const user = {};
        user.name = faker.name.lastName();
        users.push(user);
      }
      return knex('users').insert(users);
    });
};