const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    transformSecondsHand(seconds);
    transformMinsHand(seconds, mins);
    transformHourHand(mins, hours);
}

function transformSecondsHand(second) {
    const degrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${degrees}deg)`;
}

function transformMinsHand(second, min) {
    const degrees = ((min / 60) * 360) + ((second / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${degrees}deg)`;
}

function transformHourHand(min, hour) {
    const degrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);
setDate();