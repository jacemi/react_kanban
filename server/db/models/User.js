const bookshelf = require('./bookshelf');


class User extends bookshelf.Model {
  get tableName() { return 'users' }

  assignedCards() {
    return this.hasMany('Card', 'assignee_id')
  }

  createdCards() {
    return this.hasMany('Card', 'creator_id')
  }

}

module.exports = bookshelf.model('User', User);