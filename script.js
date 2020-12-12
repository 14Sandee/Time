var timeSpent = document.querySelector("#timespent");
var timeLeft = document.querySelector("#timeleft");
var yearsElem = document.querySelector("#yearsElem");
var daysElem = document.querySelector("#daysElem");
var hoursElem = document.querySelector("#hoursElem");
var minutesElem = document.querySelector("#minutesElem");
var secondsElem = document.querySelector("#secondsElem");
var button = document.querySelector("#button");
var daysElem2 = document.querySelector("#daysElem2");
var hoursElem2 = document.querySelector("#hoursElem2");
var minutesElem2 = document.querySelector("#minutesElem2");
var secondsElem2 = document.querySelector("#secondsElem2");
var button2 = document.querySelector("#button2");


setInterval(function(){
    var today = new Date();
    var pDay = new Date(2019, 11, 11, 22, 20, 0, 0);
    var event = new Date(2020, 11 , 11, 22, 20, 0, 0 );

var diff = today - pDay;

var seconds = Math.floor(diff / 1000);
var minutes = Math.floor(diff / (1000 * 60));
var hours = Math.floor(diff / (1000 * 60 * 60));
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

days = days % 365;
hours = hours % 24;
minutes = minutes % 60;
seconds = seconds % 60;

yearsElem.textContent = years;
daysElem.textContent = days;
hoursElem.textContent = hours;
minutesElem.textContent = minutes;
secondsElem.textContent = seconds;


var diff2 = event - today;

var remainingSeconds = Math.floor(diff2 / 1000);
var remaingingMinutes = Math.floor(diff2 / (1000 * 60));
var remaingingHours = Math.floor(diff2 / (1000 * 60 * 60));
var remainingDays = Math.floor(diff2/ (1000 * 60 * 60 * 24));

remaingingHours = remaingingHours % 24;
remaingingMinutes = remaingingMinutes % 60;
remainingSeconds = remainingSeconds % 60;

daysElem2.textContent = remainingDays;
hoursElem2.textContent = remaingingHours;
minutesElem2.textContent = remaingingMinutes;
secondsElem2.textContent = remainingSeconds;

}, 1000)

// setInterval(function(){
//     var event = new Date(2020, 11 , 11, 10, 20, 0, 0 );
    
//     var remainingTime = event - today;

//     var remainingSeconds = Math.floor(remainingTime / 1000);
//     var remaingingMinutes = Math.floor(remainingTime / (1000 * 60));
//     var remaingingHours = Math.floor(remainingTime / (1000 * 60 * 60));
//     var remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

//     remaingingHours = remaingingHours % 24;
//     remaingingMinutes = remaingingMinutes % 60;
//     remainingSeconds = remainingSeconds % 60;

//     daysElem2.textContent = remainingDays;
//     hoursElem2.textContent = remaingingHours;
//     minutesElem2.textContent = remaingingMinutes;
//     secondsElem2.textContent = remainingSeconds;

// }, 1000)

button.addEventListener("click", function(){
    timeSpent.style.transform = "translateX(-100%)";
    timeLeft.style.transform = "translateX(-100%)";
})

button2.addEventListener("click", function(){
    timeSpent.style.transform = "translateX(0%)";
    timeLeft.style.transform= "translateX(0%)";
})