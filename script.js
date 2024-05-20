function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('2024-08-01T12:00:00'); // Set your target date here

    const difference = targetDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10? "0" + seconds : seconds;
}

setInterval(updateCountdown, 1000);
