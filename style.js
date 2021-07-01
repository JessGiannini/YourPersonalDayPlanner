var timeEl = document.getElementById("#time");
var scheduleEl = document.getElementById("#schedule");
var lockEl = document.getElementById("#lock");
// var todayEl = document.getElementById("#currentDay");

var schedule = $("textarea");
console.log(schedule);

var scheduleArray = Array.from(schedule);
console.log(scheduleArray);

var currentHour = moment().hour;
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

//timeEl = today;
console.log("date in header: " + timeEl);
console.log("today's date" + today);
