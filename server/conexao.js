const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        password: process.env.DB_PASS,
        user: process.env.DB_USER,
        database: process.env.DB_NAME
    }
})

module.exports = knex