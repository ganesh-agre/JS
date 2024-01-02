const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const watch = document.querySelector(".watch");
let count = 0;
let interval;
let hours = 0,
  minutes = 0,
  seconds = 0;
function startWatch() {
  count++;
  if (count === 1) {
    seconds++;
    count = 0;
  }

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
    seconds = 0;
  }

  /*if (totalSeconds >= 3600) {
    hours = Math.floor(totalSeconds / 3600);
    remaniningSec = totalSeconds % 3600;
    minutes = Math.floor(remaniningSec / 60);
    seconds = remaniningSec % 60;
  } else if (totalSeconds >= 60) {
    hours = 0;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
  } else {
    hours = 0;
    minutes = 0;
    seconds = totalSeconds;
  }*/

  watch.innerHTML = `${hours}: ${minutes}:${seconds}`;
}

start.addEventListener("click", (e) => {
  if (!interval) interval = setInterval(startWatch, 1000);
});

stop.addEventListener("click", (e) => {
  clearInterval(interval);
  interval = undefined;
});

reset.addEventListener("click", (e) => {
  clearInterval(interval);
  interval = undefined;
  hours = 0;
  minutes = 0;
  seconds = 0;
  count = 0;
  watch.innerHTML = `${hours}: ${minutes}:${seconds}`;
});
