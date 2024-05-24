function updateCountdown(targetDate, ids) {
    const now = new Date();
    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById(ids.days).innerText = days < 10? "0" + days : days;
    document.getElementById(ids.hours).innerText = hours < 10? "0" + hours : hours;
    document.getElementById(ids.minutes).innerText = minutes < 10? "0" + minutes : minutes;
    document.getElementById(ids.seconds).innerText = seconds < 10? "0" + seconds : seconds;
}

setInterval(() => updateCountdown(new Date('2024-06-05T12:00:00'), {days: "days", hours: "hours", minutes: "minutes", seconds: "seconds"}), 1000);
setInterval(() => updateCountdown(new Date('2024-08-01T12:00:00'), {days: "days2", hours: "hours2", minutes: "minutes2", seconds: "seconds2"}), 1000);