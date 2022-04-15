require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      tableName: process.env.DB_TABLENAME,
      directory: `${__dirname}${process.env.DB_MIGRATIONS}`
    },
    seeds: {
      directory: `${__dirname}${process.env.DB_SEEDS}`
    }
  },

  staging: {

  },

  production: {

  }

};
