window.addEventListener("load", function () {
    let activeIndex;
    let playbackID;
    let statePlayBeats = false;
    let stateRecording = false;
    let remixButtonRotation = 360;
    const sounds = [
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
    var beats = [0, 1, 2, 1];
    // 
    const pads = document.querySelectorAll(".pad");
    for (let i = 0; i < pads.length; i++) {
        pads[i].addEventListener("click", padClicked);
    }
    document.addEventListener("keypress", keyPressed);
    document.querySelector("#buttonMain").addEventListener("click", mainButtonPressed);
    document.querySelector("#buttonRemix").addEventListener("click", doRemix);
    function mainPlay(activeIndex) {
        sounds[activeIndex].play();
    }
    function padClicked() {
        activeIndex = parseInt(document.querySelector(".pad:hover").getAttribute("id"));
        mainPlay(activeIndex);
        console.log("clicked Pad: " + activeIndex);
        checkStateOfRecording();
    }
    function keyPressed(beat) {
        if (checkPressedKey(beat.key) == true) {
            activeIndex = (beat.key) - 1;
            mainPlay(activeIndex);
            checkStateOfRecording();
        }
        else {
            return;
        }
    }
    function checkPressedKey(activeKey) {
        for (let i = 1; i < 10; i++) {
            if (activeKey == i) {
                console.log("Pressed key: " + i);
                return true;
            }
        }
        console.log("Wrong key");
        return false;
    }
    function mainButtonPressed() {
        if (statePlayBeats == false) {
            document.getElementById("buttonMain").classList.remove("fa-play");
            document.getElementById("buttonMain").classList.add("fa-pause");
            statePlayBeats = true;
            playbackID = setInterval(playBeats, beats.length * 250);
            console.log("Status Playback: " + statePlayBeats);
            console.log("PlaybackID: " + playbackID);
        }
        else {
            document.getElementById("buttonMain").classList.remove("fa-pause");
            document.getElementById("buttonMain").classList.add("fa-play");
            statePlayBeats = false;
            clearInterval(playbackID);
        }
    }
    function playBeats() {
        console.log("playBeats active");
        for (let i = 0; i < beats.length; i++) {
            setTimeout(function () { mainPlay(beats[i]); }, i * 250);
        }
    }
    function doRemix() {
        document.getElementById("buttonRemix").style.transform = `rotate(${remixButtonRotation}deg)`;
        remixButtonRotation += 360;
        beats.length = 0;
        let randomlength = getRandomNumberBetween(3, 8);
        for (let j = 0; j <= randomlength; j++) {
            beats.push(getRandomNumberBetween(0, 2));
        }
        console.log("Neuer Beat im Array beats[]: " + beats);
    }
    function checkStateOfRecording() {
        if (stateRecording == true) {
            beats.push(activeIndex);
            console.log("Inhalt Array beats" + beats);
        }
    }
    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});
//# sourceMappingURL=script.js.map