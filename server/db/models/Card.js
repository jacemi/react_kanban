const bookshelf = require('./bookshelf');


class Card extends bookshelf.Model {
  get tableName() { return 'cards' }
//   get hasTimestamps() { return true }



  assignedStatus() {
    return this.hasOne('Status', 'status_id');
  }
  assignedPriority() {
    return this.hasOne('Priority', 'priority_id');
  }

  assignee() {
    return this.hasOne('User', 'assignee_id');
  }

  creator() {
    return this.belongsTo('User', 'creator_id');
  }

}

module.exports = bookshelf.model('Card', Card);