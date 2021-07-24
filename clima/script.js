document.querySelector(".busca").addEventListener("submit", async (e) => {
  e.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    clearInfo();
    showWarning("Loading...");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=ce28ba7118d37d9cafe9c508c233565f&units=metric&lang=pt_br`;

    let url1 = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&APPID=ce28ba7118d37d9cafe9c508c233565f`;

    let results = await fetch(url); //fazendo a consulta

    let json = await results.json(); //transformando consulta em objeto

    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      clearInfo();
      showWarning("Cidade não localizada! ! !");
    }
  } else {
    clearInfo();
    showWarning("Digite uma cidade a ser pesquisada!");
  }
});

function showInfo(json) {
  showWarning("");
  document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
  document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`;

  document
    .querySelector(".temp img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`
    );

  document.querySelector(
    ".ventoInfo"
  ).innerHTML = `${json.windSpeed}<span>Km/h</span>`;

  document.querySelector(".ventoPonto").style.transform = `rotate(${
    json.windAngle - 90
  }deg)`;

  document.querySelector(".resultado").style.display = "block";
}

function showWarning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}

function clearInfo() {
  showWarning("");
  document.querySelector(".resultado").style.display = "none";
}
