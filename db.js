const Pool = require('mysql')

const pool = mysql.createPool({
    user:"",
    host:"",
    password:"",
    port: 5432,
    database:"",
    // ssl:true
})

module.exports = pool;