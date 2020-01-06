const connection = require("../config/connection.js");
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(){
        orm.selectAll("burgers", function(res){
            console.log(res)
        })
    }
}