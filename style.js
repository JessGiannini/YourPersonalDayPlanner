var timeEl = document.getElementById("#time");
var scheduleEl = document.getElementById("#schedule");
var lockEl = document.getElementById("#lock");

var schedule = $("textarea");
console.log(schedule);

var scheduleArray = Array.from(schedule);
console.log(scheduleArray);

var currentHour = moment().hour;
