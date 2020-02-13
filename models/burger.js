const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
     console.log(queryString);
    });
  },

    insertOne: function(burger){
        orm.insertOne("burgers","","burger_name",function(res){
            cb(res)
        });
    },

    updateOne: function(cb){
        orm.updateOne("burgers", function(res){
            cb(res)
        });
    }
};

module.exports = burger
