
const faker = require('faker');
const COUNT = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      const cards = [];
      for (let index = 0; index < COUNT; index++) {
        const card = {};

        card.title = faker.lorem.sentence();
        card.status_id = faker.random.number({ min: 1, max: 3});
        card.priority_id = faker.random.number({ min: 1, max: 4});
        card.assignee_id = faker.random.number({ min: 1, max: 5});
        card.creator_id = faker.random.number({ min: 1, max: 5});
        cards.push(card);
      }
      return knex('cards').insert(cards);
    });
};