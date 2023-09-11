const mysql = require("mysql2")

const pool = mysql.createPool({
    host : "localhost",
    user : "sung",
    port : "13306",
    password : "0506",
    database : "sampledb"   
});

const promisePool = pool.promise()

module.exports = promisePool 