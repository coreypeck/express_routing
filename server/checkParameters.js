var checkSubmission = require("./checkSubmission.js"); //Pulls in functions so app.js doesn't have to call them all
var checkIfBlank = require("./checkIfBlank.js");
var pushSong = require("./pushSong.js");
exports.checkParameters = function(song, res, songs, exception) { //Bring in the parameters passed from app.js
    song = checkIfBlank.checkIfBlank(song);
    if (song == null) { //returns early for readability
        res.sendStatus(400);
        return;
    } else if (songs.length < 1) { //If there aren't other songs in the array, automatically push it
        pushSong.pushSong(song, res, songs);
    } else if (song != null) {
        songs.forEach(function(submission) {
            exception += checkSubmission.checkSubmission(submission, song, exception); //Adds any song matches to our exceptions counter
        });
        if (exception >= 1) {
            exception = 0; //resets the exception counter
            res.sendStatus(400);
        } else if (exception == 0) {
            pushSong.pushSong(song, res, songs);
            exception = 0;
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }

}
