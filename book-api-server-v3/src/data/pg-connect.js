const { Pool } = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mobileum-books',
  password: 'tr@1n1ng',
  port: 5432,
});


module.exports=pool;

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
