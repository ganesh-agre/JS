const clickMe = document.querySelector("button");
const input = document.querySelector("input[type='text']");
const counter = document.querySelector(".counter");
let remaniningSec, min, sec;
let interval;
function countdown() {
  min = Math.floor(remaniningSec / 60);
  sec = remaniningSec - min * 60;
  counter.style.display = "flex";
  counter.innerHTML = `${min} : ${sec}`;
  --remaniningSec;
  if (min === 0 && sec === 0) {
    clearInterval(interval);
    alert("Counter Over");
  }
}

clickMe.addEventListener("click", (e) => {
  const minSecArray = input.value.split(".");
  remaniningSec =
    (minSecArray[0] ? parseInt(minSecArray[0]) * 60 : 0) +
    (minSecArray[1] ? parseInt(minSecArray[1]) : 0);
  input.style.display = "none";
  e.target.style.display = "none";
  interval = setInterval(countdown, 1000);
});
