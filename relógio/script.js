let digital = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function clock() {
  let time = new Date();
  let seconds = time.getSeconds();
  let minute = time.getMinutes();
  let hour = time.getHours();

  let sDeg = (360 / 60) * seconds - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  digital.innerHTML = `${adjustZero(hour)}:${adjustZero(minute)}:${adjustZero(
    seconds
  )}`;

  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
}

function adjustZero(zero) {
  return zero < 10 ? "0" + zero : zero;
}

setInterval(clock, 1000);
clock();
