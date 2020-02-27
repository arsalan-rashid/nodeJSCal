//jshint esversion:6
const express = require("express");
const app = express ();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));



app.get ("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

var num1 =parseInt(req.body.num1);
var num2= parseInt(req.body.num2);

var result = num1+num2;
console.log(typeof(num1));
res.send("The result of your calculation is"+result);

});

app.listen(3000,function(){
  console.log("server Started on port 3000");
});
