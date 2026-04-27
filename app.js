const QUESTIONS = {
  science: {
    icon: "🔬", name: "Science",
    questions: [
      { q: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Go"], answer: 0 },
      { q: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
      { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 },
      { q: "How many bones are in the adult human body?", options: ["186", "206", "226", "256"], answer: 1 },
      { q: "What is the speed of light approximately?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], answer: 0 },
      { q: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], answer: 2 },
      { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], answer: 2 },
      { q: "What force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Inertia"], answer: 2 },
      { q: "What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "110°C", "120°C"], answer: 1 },
      { q: "Which planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], answer: 1 }
    ]
  },
  history: {
    icon: "📜", name: "History",
    questions: [
      { q: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
      { q: "Who was the first President of the United States?", options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"], answer: 2 },
      { q: "The Great Wall of China was primarily built to protect against whom?", options: ["Japanese", "Mongols", "Koreans", "Russians"], answer: 1 },
      { q: "Which civilization built Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: 2 },
      { q: "In what year did the Titanic sink?", options: ["1910", "1912", "1914", "1916"], answer: 1 },
      { q: "Who painted the Mona Lisa?", options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"], answer: 2 },
      { q: "The French Revolution began in which year?", options: ["1776", "1789", "1799", "1804"], answer: 1 },
      { q: "Which empire was ruled by Genghis Khan?", options: ["Ottoman", "Roman", "Mongol", "Persian"], answer: 2 },
      { q: "What ancient civilization invented paper?", options: ["Greek", "Egyptian", "Chinese", "Roman"], answer: 2 },
      { q: "Who discovered penicillin?", options: ["Marie Curie", "Louis Pasteur", "Alexander Fleming", "Joseph Lister"], answer: 2 }
    ]
  },
  geography: {
    icon: "🌍", name: "Geography",
    questions: [
      { q: "What is the largest continent by area?", options: ["Africa", "North America", "Asia", "Europe"], answer: 2 },
      { q: "Which river is the longest in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: 1 },
      { q: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: 1 },
      { q: "Mount Everest is located in which mountain range?", options: ["Andes", "Alps", "Himalayas", "Rockies"], answer: 2 },
      { q: "Which desert is the largest in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], answer: 3 },
      { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
      { q: "Which ocean is the deepest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
      { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
      { q: "Which country has the most natural lakes?", options: ["USA", "Russia", "Canada", "Finland"], answer: 2 },
      { q: "What is the longest mountain range on land?", options: ["Himalayas", "Rockies", "Andes", "Alps"], answer: 2 }
    ]
  },
  technology: {
    icon: "💻", name: "Technology",
    questions: [
      { q: "Who co-founded Apple Inc.?", options: ["Bill Gates", "Steve Jobs", "Elon Musk", "Jeff Bezos"], answer: 1 },
      { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0 },
      { q: "In what year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], answer: 2 },
      { q: "What programming language is known as the 'language of the web'?", options: ["Python", "Java", "JavaScript", "C++"], answer: 2 },
      { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], answer: 0 },
      { q: "Which company created the Android operating system?", options: ["Apple", "Microsoft", "Google", "Samsung"], answer: 2 },
      { q: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Hyper Transfer Text Protocol", "Home Transfer Text Protocol"], answer: 0 },
      { q: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Tim Berners-Lee"], answer: 1 },
      { q: "What is the most used programming language as of 2024?", options: ["Python", "Java", "JavaScript", "C#"], answer: 0 },
      { q: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Application Memory", "Rapid Access Module"], answer: 1 }
    ]
  },
  sports: {
    icon: "⚽", name: "Sports",
    questions: [
      { q: "How many players are on a standard soccer team on the field?", options: ["9", "10", "11", "12"], answer: 2 },
      { q: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: 3 },
      { q: "In basketball, how many points is a shot beyond the arc worth?", options: ["1", "2", "3", "4"], answer: 2 },
      { q: "What sport is played at Wimbledon?", options: ["Golf", "Cricket", "Tennis", "Polo"], answer: 2 },
      { q: "How many rings are on the Olympic flag?", options: ["4", "5", "6", "7"], answer: 1 },
      { q: "What is the national sport of Japan?", options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"], answer: 2 },
      { q: "In which sport would you perform a 'slam dunk'?", options: ["Volleyball", "Basketball", "Tennis", "Baseball"], answer: 1 },
      { q: "What is the maximum score in a single frame of bowling?", options: ["10", "20", "30", "50"], answer: 2 },
      { q: "Which athlete has won the most Olympic gold medals?", options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"], answer: 2 },
      { q: "A marathon race is how many miles long?", options: ["20.2", "24.2", "26.2", "28.2"], answer: 2 }
    ]
  },
  entertainment: {
    icon: "🎬", name: "Entertainment",
    questions: [
      { q: "What is the highest-grossing film of all time (unadjusted)?", options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"], answer: 1 },
      { q: "Which band performed 'Bohemian Rhapsody'?", options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], answer: 2 },
      { q: "In the Harry Potter series, what is the name of Harry's owl?", options: ["Errol", "Hedwig", "Pigwidgeon", "Scabbers"], answer: 1 },
      { q: "Who played Jack in the movie 'Titanic'?", options: ["Brad Pitt", "Tom Cruise", "Matt Damon", "Leonardo DiCaprio"], answer: 3 },
      { q: "What fictional city is Batman's home?", options: ["Metropolis", "Star City", "Gotham City", "Central City"], answer: 2 },
      { q: "Which streaming service produced 'Stranger Things'?", options: ["Hulu", "Amazon Prime", "Disney+", "Netflix"], answer: 3 },
      { q: "How many strings does a standard guitar have?", options: ["4", "5", "6", "7"], answer: 2 },
      { q: "Who directed 'Jurassic Park'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], answer: 1 },
      { q: "What is the name of the coffee shop in the TV show 'Friends'?", options: ["Central Perk", "The Brew", "Java Joe's", "Cup O' Joe"], answer: 0 },
      { q: "Which Disney movie features the song 'Let It Go'?", options: ["Tangled", "Moana", "Frozen", "Brave"], answer: 2 }
    ]
  }
};

const DIFFICULTY_TIMERS = { easy: 30, medium: 20, hard: 10 };
const POINTS_BASE = { easy: 100, medium: 150, hard: 200 };
const LEADERBOARD_KEY = "brainbolt_leaderboard";
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 52; // r=52

// ─── State ───────────────────────────────────────────────────
let state = {
  playerName: "",
  category: null,
  difficulty: "medium",
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],          // { correct, selected, timeTaken }
  timeLeft: 20,
  timerInterval: null,
  totalTimeUsed: 0
};

// ─── DOM Refs ────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const screens = {
  home: $("screen-home"),
  categories: $("screen-categories"),
  difficulty: $("screen-difficulty"),
  quiz: $("screen-quiz"),
  results: $("screen-results"),
  leaderboard: $("screen-leaderboard")
};

// ─── Navigation ──────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

// ─── Particles Background ───────────────────────────────────
function initParticles() {
  const canvas = $("particles-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  const COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    // Draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── Category Rendering ─────────────────────────────────────
function renderCategories() {
  const grid = $("category-grid");
  grid.innerHTML = "";
  Object.entries(QUESTIONS).forEach(([key, cat]) => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.dataset.category = key;
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-name">${cat.name}</span>
      <span class="cat-count">${cat.questions.length} questions</span>
    `;
    card.addEventListener("click", () => selectCategory(key));
    grid.appendChild(card);
  });
}

function selectCategory(key) {
  state.category = key;
  $("difficulty-category-label").textContent = `${QUESTIONS[key].icon} ${QUESTIONS[key].name}`;
  showScreen("difficulty");
}

// ─── Difficulty ──────────────────────────────────────────────
function selectDifficulty(diff) {
  state.difficulty = diff;
  startQuiz();
}

// ─── Quiz Engine ─────────────────────────────────────────────
function startQuiz() {
  const cat = QUESTIONS[state.category];
  // Shuffle and pick 10 (or less)
  state.questions = shuffleArray([...cat.questions]).slice(0, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answers = [];
  state.totalTimeUsed = 0;

  // HUD
  $("hud-category-icon").textContent = cat.icon;
  $("hud-category-name").textContent = cat.name;
  $("hud-score").textContent = "0";
  $("hud-total").textContent = state.questions.length;

  showScreen("quiz");
  loadQuestion();
}

function loadQuestion() {
  const q = state.questions[state.currentIndex];
  const total = state.questions.length;

  $("hud-current").textContent = state.currentIndex + 1;
  $("progress-fill").style.width = `${((state.currentIndex) / total) * 100}%`;
  $("question-text").textContent = q.q;

  // Render options
  const grid = $("options-grid");
  grid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.index = i;
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => selectAnswer(i));
    grid.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  const maxTime = DIFFICULTY_TIMERS[state.difficulty];
  state.timeLeft = maxTime;

  const ring = $("timer-ring-fill");
  const text = $("timer-text");
  ring.style.strokeDasharray = TIMER_CIRCUMFERENCE;
  ring.style.strokeDashoffset = "0";
  ring.classList.remove("warning", "danger");
  text.classList.remove("warning", "danger");
  text.textContent = maxTime;

  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    text.textContent = state.timeLeft;

    const progress = 1 - (state.timeLeft / maxTime);
    ring.style.strokeDashoffset = (progress * TIMER_CIRCUMFERENCE).toString();

    // Color changes
    if (state.timeLeft <= 5) {
      ring.classList.add("danger"); ring.classList.remove("warning");
      text.classList.add("danger"); text.classList.remove("warning");
    } else if (state.timeLeft <= Math.floor(maxTime * 0.4)) {
      ring.classList.add("warning"); ring.classList.remove("danger");
      text.classList.add("warning"); text.classList.remove("danger");
    }

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function selectAnswer(index) {
  clearInterval(state.timerInterval);
  const q = state.questions[state.currentIndex];
  const maxTime = DIFFICULTY_TIMERS[state.difficulty];
  const timeTaken = maxTime - state.timeLeft;
  const isCorrect = index === q.answer;

  // Visual feedback
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.classList.add("disabled");
    const idx = parseInt(btn.dataset.index);
    if (idx === q.answer) btn.classList.add("correct");
    if (idx === index && !isCorrect) btn.classList.add("wrong");
  });

  // Score: base + time bonus
  if (isCorrect) {
    const timeBonus = Math.round((state.timeLeft / maxTime) * POINTS_BASE[state.difficulty] * 0.5);
    const points = POINTS_BASE[state.difficulty] + timeBonus;
    state.score += points;
    $("hud-score").textContent = state.score;
  }

  state.totalTimeUsed += timeTaken;
  state.answers.push({ correct: isCorrect, selected: index, timeTaken, timedOut: false });

  setTimeout(() => nextQuestion(), 1200);
}

function handleTimeout() {
  const q = state.questions[state.currentIndex];
  const maxTime = DIFFICULTY_TIMERS[state.difficulty];

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.classList.add("disabled");
    if (parseInt(btn.dataset.index) === q.answer) btn.classList.add("correct");
  });

  state.totalTimeUsed += maxTime;
  state.answers.push({ correct: false, selected: -1, timeTaken: maxTime, timedOut: true });

  setTimeout(() => nextQuestion(), 1200);
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    finishQuiz();
  } else {
    loadQuestion();
  }
}

// ─── Results ─────────────────────────────────────────────────
function finishQuiz() {
  clearInterval(state.timerInterval);

  const total = state.questions.length;
  const correctCount = state.answers.filter(a => a.correct).length;
  const accuracy = Math.round((correctCount / total) * 100);
  const avgTime = (state.totalTimeUsed / total).toFixed(1);

  // Emoji & message
  let emoji, title;
  if (accuracy === 100) { emoji = "👑"; title = "Perfect Score!"; }
  else if (accuracy >= 80) { emoji = "🏆"; title = "Amazing!"; }
  else if (accuracy >= 60) { emoji = "🌟"; title = "Great Job!"; }
  else if (accuracy >= 40) { emoji = "💪"; title = "Good Effort!"; }
  else { emoji = "📚"; title = "Keep Learning!"; }

  $("results-emoji").textContent = emoji;
  $("results-title").textContent = title;
  $("results-subtitle").textContent = `${QUESTIONS[state.category].icon} ${QUESTIONS[state.category].name} · ${state.difficulty.charAt(0).toUpperCase() + state.difficulty.slice(1)}`;
  $("stat-score").textContent = state.score;
  $("stat-correct").textContent = `${correctCount}/${total}`;
  $("stat-accuracy").textContent = `${accuracy}%`;
  $("stat-time").textContent = `${avgTime}s`;

  // Answer review
  const reviewList = $("review-list");
  reviewList.innerHTML = "";
  state.answers.forEach((a, i) => {
    const q = state.questions[i];
    const div = document.createElement("div");
    const cls = a.timedOut ? "timeout" : (a.correct ? "correct" : "wrong");
    const icon = a.timedOut ? "⏰" : (a.correct ? "✅" : "❌");
    const answerText = a.timedOut ? "Timed out" : q.options[a.selected];
    div.className = `review-item ${cls}`;
    div.innerHTML = `
      <span class="review-icon">${icon}</span>
      <span class="review-q">${q.q}</span>
      <span class="review-answer">${a.correct ? answerText : q.options[q.answer]}</span>
    `;
    reviewList.appendChild(div);
  });

  $("progress-fill").style.width = "100%";

  // Save to leaderboard
  saveScore(correctCount, total, accuracy);
  showScreen("results");
}

// ─── Leaderboard ─────────────────────────────────────────────
function getLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  } catch { return []; }
}

function saveScore(correct, total, accuracy) {
  const board = getLeaderboard();
  board.push({
    name: state.playerName,
    category: QUESTIONS[state.category].name,
    categoryKey: state.category,
    difficulty: state.difficulty,
    score: state.score,
    correct,
    total,
    accuracy,
    date: new Date().toLocaleDateString()
  });
  // Sort by score desc, keep top 50
  board.sort((a, b) => b.score - a.score);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board.slice(0, 50)));
}

function renderLeaderboard(filter = "all") {
  let board = getLeaderboard();
  if (filter !== "all") {
    board = board.filter(e => e.categoryKey === filter);
  }

  const body = $("leaderboard-body");
  const empty = $("leaderboard-empty");
  body.innerHTML = "";

  if (board.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  board.forEach((entry, i) => {
    const tr = document.createElement("tr");
    const rank = i + 1;
    let rankClass = rank <= 3 ? `rank-${rank}` : "";
    const isCurrentPlayer = entry.name === state.playerName && entry.score === state.score;

    if (isCurrentPlayer) tr.classList.add("highlight-row");

    tr.innerHTML = `
      <td><span class="rank-badge ${rankClass}">${rank <= 3 ? ["🥇","🥈","🥉"][rank-1] : rank}</span></td>
      <td class="player-name">${escapeHtml(entry.name)}</td>
      <td>${entry.category}</td>
      <td style="font-weight:700;color:var(--accent-light)">${entry.score}</td>
      <td>${entry.accuracy}%</td>
      <td style="color:var(--text-muted)">${entry.date}</td>
    `;
    body.appendChild(tr);
  });

  // Render category filter buttons
  renderLeaderboardFilters(filter);
}

function renderLeaderboardFilters(activeFilter) {
  const row = $("leaderboard-filters-row");
  row.innerHTML = "";
  const categories = [...new Set(getLeaderboard().map(e => e.categoryKey))];

  const allBtn = document.createElement("button");
  allBtn.className = `filter-btn ${activeFilter === "all" ? "active" : ""}`;
  allBtn.textContent = "All";
  allBtn.addEventListener("click", () => renderLeaderboard("all"));
  row.appendChild(allBtn);

  categories.forEach(key => {
    const btn = document.createElement("button");
    btn.className = `filter-btn ${activeFilter === key ? "active" : ""}`;
    btn.textContent = QUESTIONS[key]?.name || key;
    btn.addEventListener("click", () => renderLeaderboard(key));
    row.appendChild(btn);
  });
}

// ─── Utilities ───────────────────────────────────────────────
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ─── Event Listeners ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  renderCategories();

  // Home screen
  const nameInput = $("player-name");
  const startBtn = $("btn-start");

  nameInput.addEventListener("input", () => {
    startBtn.disabled = nameInput.value.trim().length === 0;
  });

  startBtn.addEventListener("click", () => {
    state.playerName = nameInput.value.trim();
    if (!state.playerName) return;
    showScreen("categories");
  });

  // Keyboard: Enter on name input
  nameInput.addEventListener("keydown", e => {
    if (e.key === "Enter" && nameInput.value.trim()) {
      state.playerName = nameInput.value.trim();
      showScreen("categories");
    }
  });

  // Back buttons
  $("btn-back-home").addEventListener("click", () => showScreen("home"));
  $("btn-back-categories").addEventListener("click", () => showScreen("categories"));
  $("btn-back-leaderboard").addEventListener("click", () => showScreen("home"));

  // Leaderboard from home
  $("btn-leaderboard").addEventListener("click", () => {
    renderLeaderboard();
    showScreen("leaderboard");
  });

  // Difficulty buttons
  document.querySelectorAll(".btn-difficulty").forEach(btn => {
    btn.addEventListener("click", () => selectDifficulty(btn.dataset.difficulty));
  });

  // Results actions
  $("btn-retry").addEventListener("click", () => startQuiz());
  $("btn-new-category").addEventListener("click", () => showScreen("categories"));
  $("btn-results-leaderboard").addEventListener("click", () => {
    renderLeaderboard();
    showScreen("leaderboard");
  });

  // Clear leaderboard
  $("btn-clear-leaderboard").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all leaderboard data?")) {
      localStorage.removeItem(LEADERBOARD_KEY);
      renderLeaderboard();
    }
  });
});
