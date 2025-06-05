const quizData = [
  {
    question:
      "Qual linguagem é usada principalmente para estilizar páginas web?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    answer: "CSS",
  },
  {
    question: "O que significa 'HTML'?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "Hyper Tool Main Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Qual desses é um framework JavaScript para interfaces?",
    options: ["Django", "Flask", "React", "Laravel"],
    answer: "React",
  },
  {
    question:
      "Qual estrutura de controle usamos para repetir um bloco de código?",
    options: ["if", "else", "loop", "switch"],
    answer: "loop",
  },
  {
    question: "O que um 'array' armazena?",
    options: [
      "Funções",
      "Números inteiros",
      "Uma coleção de valores",
      "Classes",
    ],
    answer: "Uma coleção de valores",
  },
  {
    question: "Qual linguagem é mais usada para scripts do lado do servidor?",
    options: ["JavaScript", "PHP", "HTML", "CSS"],
    answer: "PHP",
  },
  {
    question: "Qual desses não é um tipo de dado primitivo em JavaScript?",
    options: ["String", "Number", "Boolean", "Array"],
    answer: "Array",
  },
  {
    question: "O que significa 'NaN' em JavaScript?",
    options: [
      "Not a Number",
      "Negative and Null",
      "No active Network",
      "Name and Number",
    ],
    answer: "Not a Number",
  },
  {
    question: "Qual método JavaScript remove o último item de um array?",
    options: ["shift()", "pop()", "remove()", "slice()"],
    answer: "pop()",
  },
  {
    question: "Qual operador é usado para comparar valor e tipo em JavaScript?",
    options: ["==", "=", "!=", "==="],
    answer: "===",
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
