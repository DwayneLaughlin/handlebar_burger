var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "root1234",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err){
        console.error("error" + err.stack)
    }
    console.log("mysql connections works" + connection.threadId)
})
module.exports = connection;