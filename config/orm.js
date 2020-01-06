const connection = require("./connection.js");

const orm = {
    selectAll: function(table){
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, table, function(err, result){
            if (err) throw err;
            console.table(queryString);
        });
    },

    insertOne: function(table, col1, col2){
        const queryString = "INSERT INTO ?? (??, ??):"
        connection.query(queryString, [table, col1, col2], function (err, result){
            if (err) throw err;
            console.log(result)
        });
    }


};
module.exports = orm;