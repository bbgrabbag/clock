
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
var secondsTally = 0;
var minsTally = 0;
var hoursTally = 0;

function setTime() {
    const currentTime = new Date;

    const seconds = currentTime.getSeconds();
    if (seconds === 0) secondsTally += 1;
    const secDegree = (((seconds + (60 * secondsTally)) / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;

    const minutes = currentTime.getMinutes() + seconds/60;
    if (minutes === 0) minssTally += 1;
    const minDegree = (((minutes + (60 * minsTally)) / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`

    const hours = currentTime.getHours() + minutes/60;
    if (hours === 0) hoursTally += 1;
    const hourDegree = (((hours + (12 * hoursTally)) / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setTime, 1000);
setTime();