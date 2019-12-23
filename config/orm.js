const connection = require("./connection.js");

const orm = {
    selectAll: function(table){
        const queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.table(result);
        });
    },

    insertOne: function(table, burger_name, devoured){
        const queryString = "INSERT INTO burgers (??, ??):"
        connection.query(queryString, [burger_name, devoured], function (err, result){
            if (err) throw err;
            console.log(result)
        });
    }


};
module.exports = orm;