const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//when browser asks the server again

app.post("/bmicalculator", function(req,res){

  var height = parseFloat(req.body.n1);
  var weight = parseFloat(req.body.n2);

  var result = weight/(height*height);

  res.send("Your BMI is: " + result)
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
  console.log(__dirname);
});
