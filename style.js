var timeEl = document.getElementById("#time");
var scheduleEl = document.getElementById("#schedule");
var lockEl = document.getElementById("#lock");
var saveBtn = document.getElementById("#saveBtn");

var schedule = $("textarea");
console.log(schedule);

// tutor suggested making schedule into an array to use for storing user input
//var scheduleArray = Array.from(schedule);
//console.log(scheduleArray);

var currentHour = moment().hour;
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

console.log("today's date" + today);

//TODO: create a way to check if current time is present time, past time, or future time.

//TODO: save button index to lock it and creat hover
//saveBtn.addEventListener("click", localStorage.setItem("schedule", "textarea"));
saveBtn.addEventListener("storage", () => {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem("textarea")));
});
