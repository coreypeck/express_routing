$("document").ready(function() {
    //sets the default values of our forms
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    getSongs();

    $("#songForm").on("submit", function() {
        event.preventDefault();

        var song = {}; //We are going to temporarily store song here

        $.each($('#songForm').serializeArray(), function(i, field) {
            song[field.name] = field.value;
        });
        console.log("Song Submitted is ", song);

        $.ajax({
            type: "post",
            url: "/songs",
            data: song,
            success: function(response) {
                console.log("Post/songs works Fool");
                $('#songForm').find('input[type=text]').val("");
                getSongs();
            },
            error: function(response) {
                console.log("Attempted post/songs no work FOOL");
            }
        });
    });
});

function getSongs() { //Gets the songs back from the server
    $.ajax({
        type: "GET",
        url: "/songs",
        success: function(songs) {
            $("#song-list").empty();
            songs.forEach(function(song) {
                $("#song-list").append('<div class="eachSong"><div><strong>' + song.title + "</strong></div><div> By: <span><em>" + song.artist + "</em></span></div><div>Date: " + song.dateAdded + "</div></div>").hide();
                $("#song-list").fadeIn("slow"); //I attempted to select the last child to fade in, but whenever I tried to get to the children, it stopped working. I had to settle for this -$("#song-list")children().last().fadeIn("slow");-
            });
        },
        error: function(response) {
            console.log("Something Went Screwy");
        }
    });
}
