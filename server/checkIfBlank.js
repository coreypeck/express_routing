exports.checkIfBlank = function(song) {//Checks to see if either parameter is blank
    if (song.title == "" || song.artist == ""){
        song = null;
        return song;
} else {
    return song;
}
}
