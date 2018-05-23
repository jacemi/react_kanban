const bookshelf = require('./bookshelf');


class Status extends bookshelf.Model {
  get tableName() { return 'status' }
//   get hasTimestamps() { return true }


  cardsWithStatus() {
    return this.hasMany('Card', 'status_id')
  }

}

module.exports = bookshelf.model('Status', Status);