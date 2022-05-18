const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => playSample(key));
});
function playSample(key) {
    var sound = new Audio('a.mp3');
    sound.play();
}
//# sourceMappingURL=script.js.map