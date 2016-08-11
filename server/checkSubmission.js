exports.checkSubmission = function(eachSong, song, exception) {//Checks every entry in our Songs array and if it finds a match, it adds one to the exceptions counter
    if (eachSong.title == song.title && eachSong.artist == song.artist) {//I did it this way to ensure I checked ALL the slots and THEN added it or not.
      exception++;
        return exception;//My Original method would add it everytime the given spot in the array didn't match.
    } else {
      return 0;
    }
}
