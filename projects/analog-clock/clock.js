const clockEl = document.getElementsByClassName("diallines-container")[0];
for (let i = 0; i < 60; i++) {
  clockEl.innerHTML +=
    "<div class='diallines' style='transform:rotate(" + 6 * i + "deg)'></div>";
}

function clock() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  hDeg = h * 30 + m * (30 / 60);
  mDeg = m * 6 + s * (6 / 60);
  sDeg = s * 6;
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  hourHand.style.transform = `rotate(${hDeg}deg)`;
  minuteHand.style.transform = `rotate(${mDeg}deg)`;
  secondHand.style.transform = `rotate(${sDeg}deg)`;
}

setInterval("clock()", 100);
