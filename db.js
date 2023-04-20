const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'Pappa72&Mamma84',
    port: 5432
})

module.exports = pool
