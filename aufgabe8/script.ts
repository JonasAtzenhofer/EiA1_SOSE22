const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playSample(key))
})

function playSample(key) {

    var sound:HTMLAudioElement  = new Audio('a.mp3');
    sound.play();
}


