const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req,res){
    burger.selectAll(function(data){
        // var hbsObject = {
        //     burgers : data
        // };
        
        // console.log(hbsObject);
    })
    res.render('index')
    // res.redirect("/burgers")
});

router.put("/api/burger/:id", function (req,res){
    burger.updateOne(function(data){
        
    })
});

router.post("/api/burger", function (req,res){
    burger.insertOne(function(data){

    })
});
module.exports = router


