document.body.addEventListener("keyup", (e) => {
  play(e.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song != "") {
    let music = song.split("");
    playMusic(music);
  }
});

function play(code) {
  let audio = document.querySelector(`#s_${code}`);
  let key = document.querySelector(`div[data-key="${code}"]`);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    setTimeout(() => {
      key.classList.remove("active");
    }, 250);
  }
}

function playMusic(music) {
  let wait = 0;

  for (let item of music) {
    setTimeout(() => {
      play(`key${item}`);
    }, wait);
    wait += 250;
  }
}
