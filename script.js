const quizData = [
  {
    question: "Qual planeta é conhecido como o planeta vermelho?",
    options: ["Terra", "Marte", "Júpiter", "Vênus"],
    answer: "Marte",
  },
  {
    question: "Qual é a fórmula da água?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O",
  },
  {
    question: "Qual cientista desenvolveu a teoria da relatividade?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileu Galilei",
      "Marie Curie",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Qual é o maior órgão do corpo humano?",
    options: ["Fígado", "Pele", "Coração", "Pulmão"],
    answer: "Pele",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
  } else {
    button.classList.add("incorrect");
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultEl.classList.add("hidden");
  restartBtn.classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
});

function showResult() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultEl.classList.remove("hidden");
  restartBtn.classList.remove("hidden");
  resultEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
}

showQuestion();
