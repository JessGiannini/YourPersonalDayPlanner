var timeEl = document.getElementById("#time");
var scheduleEl = document.getElementById("#schedule");
var lockEl = document.getElementById("#lock");
var saveBtn = document.getElementById("#saveBtn");

var schedule = $("textarea");
console.log(schedule);

// tutor suggested making schedule into an array to use for storing user input

//var scheduleArray = Array.from(schedule);
//console.log(scheduleArray);

// updates title with current day and date

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));
console.log("today's date" + today);

//TODO: create a way to check if current time is present time, past time, or future time.

var currentHour = moment().hour;
var futureHour = moment().endOf("hour").fromNow();
var pastHour = moment().startOf("hour").fromNow();

function pastPresentFuture() {
  if (timeEl === currentHour) {
    document.getElementById("#time").style.setProperty(".present");
  } else if (timeEl === pastHour) {
    document.getElementById("#time").style.setProperty(".past");
  } else if (timeEl === futureHour) {
    document.getElementById("#time").style.setProperty(".future");
  }
  var update = setInterval(pastPresentFuture, 1000);
}

//TODO: figure out how to lock the button and save updated textarea to storage

scheduleEl.onstorage =
  //TODO: save button index to lock it and create hover
  //saveBtn.addEventListener("click", localStorage.setItem("schedule", "textarea"));
  saveBtn.addEventListener("click", () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem("textarea")));
  });
