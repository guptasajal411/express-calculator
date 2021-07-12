const express = require("express");
const app = express();

app.get("/", function(req, res){
    // res.send("this sentence is sent from server to port 3000 in response to the HTTP request from your browser");
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
    console.log("listening to port 3000");
})