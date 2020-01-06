var mysql = require("mysql");


var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "oafodn2dv3rtye7b",
    port: 3306,
    password: "krgcd8ausuc5d92g",
    database: "qtn9nrlyf2q54vyj"
});
};
connection.connect(function(err){
    if (err){
        console.error("error" + err.stack)
    }
    console.log("mysql connections works" + connection.threadId)
})
module.exports = connection;