window.addEventListener("load", function() {
const sounds: HTMLAudioElement[] = 

[
    new Audio("Aufgabe8_assets_hihat.mp3"),
    new Audio("Aufgabe8_assets_kick.mp3"),
    new Audio("Aufgabe8_assets_snare.mp3"),
    new Audio("Aufgabe8_assets_A.mp3"), 
    new Audio("Aufgabe8_assets_C.mp3"), 
    new Audio("Aufgabe8_assets_F.mp3"),
    new Audio("Aufgabe8_assets_G.mp3"),
    new Audio("Aufgabe8_assets_laugh-1.mp3"),
    new Audio("Aufgabe8_assets_laugh-2.mp3")
];

// 
function playSample(sound) {
    sound.play();
}

// Playbutton-Event
function playBeat() {
    setInterval(
        function(){
        for (let counter = 0; counter < sounds.length; counter++)
        {sounds[counter].play();}
    }, 500);}

    // Klick-Event
    document.querySelector("#hihat").addEventListener("click", function() {playSample(sounds[0])});
    document.querySelector("#kick").addEventListener("click", function() {playSample(sounds[1])});
    document.querySelector("#snare").addEventListener("click", function() {playSample(sounds[2])});
    document.querySelector("#noteA").addEventListener("click", function() {playSample(sounds[3])});
    document.querySelector("#noteB").addEventListener("click", function() {playSample(sounds[4])});
    document.querySelector("#noteC").addEventListener("click", function() {playSample(sounds[5])});
    document.querySelector("#noteD").addEventListener("click", function() {playSample(sounds[6])});
    document.querySelector("#laughter1").addEventListener("click", function() {playSample(sounds[7])});
    document.querySelector("#laughter2").addEventListener("click", function() {playSample(sounds[8])});

    // Klick-Event Playbutton
    document.querySelector("#playbutton").addEventListener("click", function() {playBeat()});

})
