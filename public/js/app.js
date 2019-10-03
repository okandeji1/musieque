// Select all div(s)
var divLength = document.querySelectorAll('.song').length;
// Loop through
for(var i = 0; i < divLength; i++){
    // Click to play song
    var demo = document.querySelectorAll('.song')[i].addEventListener('click', playSong);
    // Double click to pause song
    var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick', pauseSong);
}
// Song directory
var song1 = new Audio();
song1.src = "/music/Major Lazer Ft. PARTYNEXTDOOR   Nicki Minaj - Run Up (FKi 1st Remix) - (www.mp3";

var song2 = new Audio();
song2.src = "/music/2baba ft. HI Idibia - Oyi.mp3";

var song3 = new Audio();
song3.src = "/music/04 One Time - (SongsLover.com).mp3";

var song4 = new Audio();
song4.src = "/music/06. LOYALTY. (Ft. Rihanna) - (www.SongsLover.club).mp3";

var song5 = new Audio();
song5.src = "/music/09 Pray - (SongsLover.com).mp3";

var song6 = new Audio();
song6.src = "/music/12 Beauty and a Beat - (SongsLover.com).mp3";

var song7 = new Audio();
song7.src = "/music/Wizkid-Fever.mp3";

var song8 = new Audio();
song8.src = "/music/Akon - Can t Say No - (SongsLover.com).mp3";

var song9 = new Audio();
song9.src = "/music/12 Hating On the Club - (SongsLover.com).mp3";

// Play Song
function playSong(){
    var songId = this.innerHTML;
    switch(songId){
        case "a":
            song1.play();
            break;
        case "b":
            song2.play();
            break;
        case "c":
            song3.play();
            break;
        case "d":
            song4.play();
            break;
        case "e":
            song5.play();
            break;
        case "f":
            song6.play();
            break;
        case "g":
            song7.play();
            break;
        case "h":
            song8.play();
            break;
        case "i":
            song9.play();
            break;
            default:
                console.log('No input')
    }
}

// Pause song
function pauseSong(){
    var songId = this.innerHTML;
    switch(songId){
        case "a":
            song1.pause();
            break;
        case "b":
            song2.pause();
            break;
        case "c":
            song3.pause();
            break;
        case "d":
            song4.pause();
            break;
        case "e":
            song5.pause();
            break;
        case "f":
            song6.pause();
            break;
        case "g":
            song7.pause();
            break;
        case "h":
            song8.pause();
            break;
        case "i":
            song9.pause();
            break;
            default:
                console.log('No input')
    }
}