const buttton = document.querySelector("button");
const bar = document.querySelector(".bar");
let progressVal = 1;
let interval;
buttton.addEventListener("click", (e) => {
  interval = setInterval(progress, 10);
});

function progress() {
  if (progressVal === 100) {
    clearInterval(interval);
    progressVal = 1;
  } else {
    progressVal++;
    bar.style.width = progressVal + "%";
  }
}
