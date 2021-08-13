//Initial Data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//Events
document.querySelector(".scoreArea button").addEventListener("click", reset);

//Functions
function showQuestion() {
  let q = questions[currentQuestion];
  let pct = Math.floor((currentQuestion / questions.length) * 100);

  document.querySelector(".progress--bar").style.width = `${pct}%`;
  if (q) {
    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";

    document.querySelector(".question").innerHTML = q.question;
    let optionsHtml = "";
    for (let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}

function optionClickEvent(e) {
  let clickedOption = e.target.getAttribute("data-op");

  if (questions[currentQuestion].answer === parseInt(clickedOption)) {
    correctAnswers++;
  }
  currentQuestion++;
  showQuestion();
}

function finishQuiz() {
  let score = (correctAnswers / currentQuestion) * 100;

  if (score < 30) {
    document.querySelector(".scoreText1").innerHTML = "Péssimo";
    document.querySelector(".scorePct").style.color = "#ff0000";
  } else if (score >= 30 && score < 70) {
    document.querySelector(".scoreText1").innerHTML = "Ok";
    document.querySelector(".scorePct").style.color = "#ffff00";
  } else if (score >= 70) {
    document.querySelector(".scoreText1").innerHTML = "Parabéns";
    document.querySelector(".scorePct").style.color = "#00ff00";
  }

  document.querySelector(".questionArea").style.display = "none";
  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".scorePct").innerHTML = `Acertou ${score}%`;
  document.querySelector(
    ".scoreText2"
  ).innerHTML = `Você respondeu ${currentQuestion} questões e acertou ${correctAnswers}`;
  console.log(correctAnswers);
}

function reset() {
  currentQuestion = 0;
  correctAnswers = 0;
  showQuestion();
}
