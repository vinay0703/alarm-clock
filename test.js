console.log("Welcome to Alarm Clock");
var audio = new Audio("alarm.mp3");
//Function to trigger alarm
function ringBell() {
  audio.play();
}

const alarmSubmit = document.getElementById("alarmSubmit");
alarmSubmit.addEventListener("click", setAlarm);

//Function to set alarm
function setAlarm(e) {
  //preventing default behaviour of page reload
  e.preventDefault();
  console.log("Setting Alarm...");
  let alarm = document.getElementById("alarm");

  //current date
  now = new Date();

  //converting alarm.value into proper date
  alarm = new Date(alarm.value.split("T")[0] + " " + alarm.value.split("T")[1]);

  //Timestamp in milliseconds
  //Take care of value & size of timeToAlarm to be in range
  let timeToAlarm = alarm - now;
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("Alarm triggered");
      ringBell();
    }, timeToAlarm);
  }
}
