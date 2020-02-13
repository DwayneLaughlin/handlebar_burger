const connection = require("./connection.js");

// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys and push the key/value as a string int arr
//   for (var key in ob) {
//     var value = ob[key];
//     // check to skip hidden properties
//     if (Object.hasOwnProperty.call(ob, key)) {
//       // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//       // e.g. {sleepy: true} => ["sleepy=true"]
//       arr.push(key + "=" + value);
//     }
//   }

//   // translate array of strings to a single comma-separated string
//   return arr.toString();
// }

const orm = {
  selectAll: function(table) {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, table, function(err, result) {
      if (err) throw err;
      console.log(result)
      
    });
  },

  insertOne: function(table, col1, col2, value) {
    const queryString = "INSERT INTO ?? (??, ??) VALUES (??, false);";
    connection.query(queryString, [table, col1, col2, value], function(
      err,
      result
    ) {
      if (err) throw err;
      
    });
  },
  updateOne: function(col1, condition) {
    const queryString = "UPDATE burgers SET ?? WHERE ??;";
    connection.query(queryString, [col1, condition], function(err, result) {
      if (err) throw (err, console.log(result));
    });
  }
};
module.exports = orm;
