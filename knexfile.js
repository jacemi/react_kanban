// Update with your config settings.
const path = require('path');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'react_kanban_superuser',
      password: 'password',
      database: 'react_kanban',
      charset: 'utf8'
    },
    migrations: {
      directory: path.join(__dirname, './server/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, './server/db/seeds')
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
