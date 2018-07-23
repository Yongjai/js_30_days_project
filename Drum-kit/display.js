window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`div[data-value="${e.keyCode}"]`);

    audio.currentTime = 0;
    key.classList.add("playing");
    audio.play();

    setTimeout(function () {
        key.classList.remove('playing');
    }, 100);
}