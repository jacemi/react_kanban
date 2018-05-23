const bookshelf = require('./bookshelf');


class Priority extends bookshelf.Model {
  get tableName() { return 'priority' }
//   get hasTimestamps() { return true }


  cards() {
    return this.hasMany('Card', 'priority_id')
  }

}

module.exports = bookshelf.model('Priority', Priority);