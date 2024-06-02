// a countdown timer that finds items in the dom of type .countdown, and reads the data-time attribute to set the countdown time, and replaces the text of the element with the countdown time.
// the countdown timer is updated every second
// when the countdown timer reaches 0, the element is removed from the dom

// countdown timer
// find all elements with class .countdown
// read the data-time attribute
// set the countdown timer
// update the countdown timer every second
// when the countdown timer reaches 0, remove the element from the dom
let initialDate = new Date(countdown.getAttribute('data-time'));

setInterval(() => {
    if (document.getElementById('countdown') != null) {
        let currentDate = new Date();
        let difference = initialDate - currentDate; // difference in milliseconds

        if (difference <= 0) {
            document.getElementById('countdown').remove();
        }
        else {
            let seconds = Math.floor((difference / 1000) % 60);
            let minutes = Math.floor((difference / 1000 / 60) % 60);
            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));

            document.getElementById('countdown').innerHTML = days + "dager <br>" + hours + ":" + minutes + "." + seconds;
        }
    }
}, 1000);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(err) {
        console.log('Service Worker registration failed:', err);
    });
}