exports.pushSong = function(song, res, songs) {//Adds our date before pushing it to the array
  var getDate = new Date();
  song["dateAdded"] = getDate.toDateString();
    songs.push(song);
    res.sendStatus(200);
}
