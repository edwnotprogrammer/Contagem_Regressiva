const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const saturdaysEl = document.getElementById("saturdays"); // novo elemento

const newYears = "14 sep 2025";

function countdown() {
    const newMarriageDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newMarriageDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    saturdaysEl.innerHTML = countSaturdays(currentDate, newMarriageDate); // atualiza os sábados
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function countSaturdays(startDate, endDate) {
    let count = 0;
    const date = new Date(startDate);

    while (date <= endDate) {
        if (date.getDay() === 6) { // sábado = 6
            count++;
        }
        date.setDate(date.getDate() + 1);
    }

    return count;
}

countdown();
setInterval(countdown, 1000);
