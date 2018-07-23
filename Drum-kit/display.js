window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    audio.currentTime = 0;
    audio.play();
}