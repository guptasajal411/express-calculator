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
    res.send("Thanks for using this calculator!!<br>" + n1 + " + " + n2 + " = " + (n1 + n2));
})

app.listen(3000, function(){
    console.log("listening to port 3000");
})