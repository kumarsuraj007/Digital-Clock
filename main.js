var hourEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var amPmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // Check whether AM or PM
  let Format = h >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  h = h % 12;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  amPmEl.innerText = Format;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
