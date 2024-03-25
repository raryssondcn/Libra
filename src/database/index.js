const mysql2 = require("mysql2")

const pool = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "libraryManager_knex"
}).promise()

async function connection(){
    await pool.connection((err) => {
        if(err){
            throw err
        }
        console.log("MySql connected")
    })
    pool.destroy
}

module.exports = {connection, pool}