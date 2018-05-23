const bookshelf = require('./bookshelf');


class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
//   get hasTimestamps() { return true }



  assignedStatus() {
    return this.belongsTo('Status', 'status_id');
  }

  assignedPriority() {
    return this.belongsTo('Priority', 'priority_id');
  }

  assignee() {
    return this.belongsTo('User', 'assignee_id');
  }

  creator() {
    return this.belongsTo('User', 'creator_id');
  }

}

module.exports = bookshelf.model('Card', Card);