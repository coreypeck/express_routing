var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var songs = []; //stores our songs
var exception = 0; //Keeps track of errors with user data

var http = require("http");

var checkParameters = require("./checkParameters.js");

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/songs", function(req, res) {
  var song = req.body;
  checkParameters.checkParameters(song, res, songs, exception); //calls module checkParameters (Named for continuity)
});

app.get("/songs", function(req, res) {
    var song = req.body;
    res.send(songs);
});
app.get("/*", function(req, res) {
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file)); //makes files be able to be used on multiple OS's
});

app.listen(app.get("port"), function() { //Starts Server
    // console.log("Enough Already! I'm at Port: ", app.get("port"));
});
