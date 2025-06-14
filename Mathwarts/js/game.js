// Game State
let currentLevel = 1;
let xp = 0;
let coins = 0;

// Sample quiz data
const quizData = {
    1: {
        question: "A fair coin is tossed 3times what is the probability of getting exactly 2 heads ",
        answer: "3/8",
        

    },
    2: {
        question: "y'''+ y = 0 .Find order of the differential equation",
        answer: "3"
    },
    3: {
        question: "What is the fourier transformation of delta function ?",
        answer: "1"
    }
};

// Show quiz modal
function startLevel(level) {
    currentLevel = level;

    const modal = document.getElementById("quiz-modal");
    const questionText = document.getElementById("question");
    const feedback = document.getElementById("feedback");

    // Set the question
    questionText.textContent = quizData[level].question;
    feedback.textContent = "";
    
    // Show modal
    modal.classList.remove("hidden");
}

// Submit answer
function submitAnswer() {
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const userAnswer = answerInput.value.trim();

    if (userAnswer === quizData[currentLevel].answer) {
        feedback.textContent = "✅ Correct! +10 XP, +5 Coins";
        xp += 10;
        coins += 5;

        // Update stats
        document.getElementById("xp").textContent = xp;
        document.getElementById("coins").textContent = coins;
        document.getElementById("level").textContent = currentLevel + 1;

        // Unlock next level button
        const nextLevelBtn = document.querySelector(`button[onclick="startLevel(${currentLevel + 1})"]`);
        if (nextLevelBtn) {
            nextLevelBtn.classList.remove("locked");
        }

        // Hide modal after a delay
        setTimeout(() => {
            document.getElementById("quiz-modal").classList.add("hidden");
            answerInput.value = "";
        }, 1500);
    } else {
        feedback.textContent = "❌ Wrong answer. Try again!";
    }
}

function showFireworks() {
  const container = document.getElementById('fireworks-container');
  container.innerHTML = ''; // Clear old fireworks
  container.classList.remove('hidden');

  for (let i = 0; i < 15; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    firework.style.setProperty('--y', `${Math.random() * -200}px`);
    firework.style.background = getRandomColor();
    container.appendChild(firework);
  }

  setTimeout(() => {
    container.classList.add('hidden');
  }, 1000);
}

function getRandomColor() {
  const colors = ['#FFD700', '#FF4500', '#00FF7F', '#00BFFF', '#FF69B4'];
  return colors[Math.floor(Math.random() * colors.length)];
}


function startLesson() {
  document.getElementById("tutorial").style.display = "none";
  document.getElementById("quiz-modal").classList.remove("hidden");
}
