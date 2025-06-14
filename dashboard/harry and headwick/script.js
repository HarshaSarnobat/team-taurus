
const grid = document.getElementById('grid');
const questionText = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const feedback = document.getElementById('feedback');

let playerX = 0;
let playerY = 0;
const goalX = 4;
const goalY = 4;

const questions = [
  { q: "What is the output of typeof null?", a: "object" },
  { q: "What symbol is used for single-line comments in JavaScript?", a: "//" },
  { q: "What does === check in JavaScript?", a: "strict equality" },
  { q: "What is the keyword to declare a constant in JS?", a: "const" },
  { q: "Which HTML tag is used to link CSS?", a: "link" },
];

let currentQuestionIndex = 0;

function drawGrid() {
  grid.innerHTML = '';
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (x === playerX && y === playerY) {
        cell.classList.add('player');
      }
      if (x === goalX && y === goalY) {
        cell.classList.add('goal');
      }
      grid.appendChild(cell);
    }
  }
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionText.textContent = questions[currentQuestionIndex].q;
    answerInput.value = "";
    feedback.textContent = "";
  } else {
    questionText.textContent = "🎉 You've completed all questions!";
    feedback.textContent = "";
  }
}

function submitAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestionIndex].a.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct! Moving forward.";
    playerX = Math.min(playerX + 1, 4);
    playerY = Math.min(playerY + 1, 4);
    drawGrid();
    if (playerX === goalX && playerY === goalY) {
      questionText.textContent = "🎉 You reached the goal!";
      feedback.textContent = "";
    } else {
      currentQuestionIndex++;
      showQuestion();
    }
  } else {
    feedback.textContent = "❌ Incorrect! Try again.";
  }
}

drawGrid();
showQuestion();