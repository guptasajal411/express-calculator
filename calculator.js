const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("this sentence is sent from server to port 3000 in response to the HTTP request from your browser");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    res.send("Thanks for using this calculator!!<br>" + n1 + " + " + n2 + " = " + (n1 + n2) + '<br><a href="/"><button type="button">Add another numbers!</button></a><br><a href="/bmi"><button type="button">Try BMI!</button></a>'
    );
})

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html")
})

app.post("/bmi", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    res.send("You BMI is: " + weight/(height * height) + '<br><a href="/bmi"><button type="button">Calculate BMI again!</button></a><br><a href="/"><button type="button">Try addition!</button></a>');
})

app.listen(3000, function(){
    console.log("listening to port 3000");
})