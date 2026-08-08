/* ===== Little Learners — Learn English & Numbers ===== */

/* ---------- Letter data ---------- */
const LETTERS = [
  { letter: "A", phonic: "a", word: "Apple", emoji: "🍎", words: [{ word: "Apple", emoji: "🍎" }, { word: "Alligator", emoji: "🐊" }, { word: "Ant", emoji: "🐜" }] },
  { letter: "B", phonic: "b", word: "Ball", emoji: "⚽", words: [{ word: "Ball", emoji: "⚽" }, { word: "Baby", emoji: "👶" }, { word: "Boy", emoji: "👦" }] },
  { letter: "C", phonic: "c", word: "Cat", emoji: "🐱", words: [{ word: "Cat", emoji: "🐱" }, { word: "Car", emoji: "🚗" }, { word: "Cake", emoji: "🎂" }] },
  { letter: "D", phonic: "d", word: "Dog", emoji: "🐶", words: [{ word: "Dog", emoji: "🐶" }, { word: "Duck", emoji: "🦆" }, { word: "Drum", emoji: "🥁" }] },
  { letter: "E", phonic: "e", word: "Elephant", emoji: "🐘", words: [{ word: "Elephant", emoji: "🐘" }, { word: "Egg", emoji: "🥚" }, { word: "Ear", emoji: "👂" }] },
  { letter: "F", phonic: "f", word: "Fish", emoji: "🐠", words: [{ word: "Fish", emoji: "🐠" }, { word: "Flower", emoji: "🌸" }, { word: "Frog", emoji: "🐸" }] },
  { letter: "G", phonic: "g", word: "Grapes", emoji: "🍇", words: [{ word: "Grapes", emoji: "🍇" }, { word: "Goat", emoji: "🐐" }, { word: "Guitar", emoji: "🎸" }] },
  { letter: "H", phonic: "h", word: "Hat", emoji: "🎩", words: [{ word: "Hat", emoji: "🎩" }, { word: "Horse", emoji: "🐴" }, { word: "House", emoji: "🏠" }] },
  { letter: "I", phonic: "i", word: "Ice cream", emoji: "🍦", words: [{ word: "Ice cream", emoji: "🍦" }, { word: "Island", emoji: "🏝️" }, { word: "Igloo", emoji: "⛄" }] },
  { letter: "J", phonic: "j", word: "Juice", emoji: "🧃", words: [{ word: "Juice", emoji: "🧃" }, { word: "Jellyfish", emoji: "🪼" }, { word: "Jeep", emoji: "🚙" }] },
  { letter: "K", phonic: "k", word: "Kite", emoji: "🪁", words: [{ word: "Kite", emoji: "🪁" }, { word: "Kangaroo", emoji: "🦘" }, { word: "Key", emoji: "🗝️" }] },
  { letter: "L", phonic: "l", word: "Lion", emoji: "🦁", words: [{ word: "Lion", emoji: "🦁" }, { word: "Lemon", emoji: "🍋" }, { word: "Ladybug", emoji: "🐞" }] },
  { letter: "M", phonic: "m", word: "Monkey", emoji: "🐵", words: [{ word: "Monkey", emoji: "🐵" }, { word: "Moon", emoji: "🌙" }, { word: "Milk", emoji: "🥛" }] },
  { letter: "N", phonic: "n", word: "Nest", emoji: "🪺", words: [{ word: "Nest", emoji: "🪺" }, { word: "Nose", emoji: "👃" }, { word: "Nut", emoji: "🥜" }] },
  { letter: "O", phonic: "o", word: "Orange", emoji: "🍊", words: [{ word: "Orange", emoji: "🍊" }, { word: "Owl", emoji: "🦉" }, { word: "Octopus", emoji: "🐙" }] },
  { letter: "P", phonic: "p", word: "Penguin", emoji: "🐧", words: [{ word: "Penguin", emoji: "🐧" }, { word: "Pizza", emoji: "🍕" }, { word: "Pig", emoji: "🐷" }] },
  { letter: "Q", phonic: "q", word: "Queen", emoji: "👑", words: [{ word: "Queen", emoji: "👑" }, { word: "Quilt", emoji: "🛏️" }, { word: "Question", emoji: "❓" }] },
  { letter: "R", phonic: "r", word: "Rabbit", emoji: "🐰", words: [{ word: "Rabbit", emoji: "🐰" }, { word: "Rainbow", emoji: "🌈" }, { word: "Robot", emoji: "🤖" }] },
  { letter: "S", phonic: "s", word: "Sun", emoji: "☀️", words: [{ word: "Sun", emoji: "☀️" }, { word: "Star", emoji: "⭐" }, { word: "Snake", emoji: "🐍" }] },
  { letter: "T", phonic: "t", word: "Tiger", emoji: "🐯", words: [{ word: "Tiger", emoji: "🐯" }, { word: "Tree", emoji: "🌳" }, { word: "Train", emoji: "🚂" }] },
  { letter: "U", phonic: "u", word: "Umbrella", emoji: "☂️", words: [{ word: "Umbrella", emoji: "☂️" }, { word: "Unicorn", emoji: "🦄" }, { word: "UFO", emoji: "🛸" }] },
  { letter: "V", phonic: "v", word: "Van", emoji: "🚐", words: [{ word: "Van", emoji: "🚐" }, { word: "Violin", emoji: "🎻" }, { word: "Volcano", emoji: "🌋" }] },
  { letter: "W", phonic: "w", word: "Whale", emoji: "🐋", words: [{ word: "Whale", emoji: "🐋" }, { word: "Watch", emoji: "⌚" }, { word: "Watermelon", emoji: "🍉" }] },
  { letter: "X", phonic: "x", word: "Xylophone", emoji: "🎵", words: [{ word: "Xylophone", emoji: "🎵" }, { word: "X-ray", emoji: "🩻" }, { word: "Xerus", emoji: "🐿️" }] },
  { letter: "Y", phonic: "y", word: "Yoyo", emoji: "🪀", words: [{ word: "Yoyo", emoji: "🪀" }, { word: "Yak", emoji: "🐂" }, { word: "Yarn", emoji: "🧶" }] },
  { letter: "Z", phonic: "z", word: "Zebra", emoji: "🦓", words: [{ word: "Zebra", emoji: "🦓" }, { word: "Zoo", emoji: "🦁" }, { word: "Zipper", emoji: "🤐" }] },
];

/* Distinct bright colors, one per letter card */
const COLORS = [
  "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
  "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50",
  "#8bc34a", "#cddc39", "#ffc107", "#ff9800", "#ff5722",
  "#795548", "#607d8b", "#d32f2f", "#ad1457", "#6a1b9a",
  "#4527a0", "#283593", "#1565c0", "#00838f", "#2e7d32",
  "#f57f17",
];

/* ---------- Number data: 1 to 100 ---------- */
const NUMBER_WORDS = {
  1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven",
  8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen",
  14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen",
  19: "Nineteen", 20: "Twenty", 30: "Thirty", 40: "Forty", 50: "Fifty",
  60: "Sixty", 70: "Seventy", 80: "Eighty", 90: "Ninety", 100: "One hundred"
};

function numberToWords(n) {
  if (NUMBER_WORDS[n]) return NUMBER_WORDS[n];
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  return `${NUMBER_WORDS[tens]}-${NUMBER_WORDS[ones]}`;
}

const NUMBERS = Array.from({ length: 100 }, (_, i) => {
  const n = i + 1;
  return { number: n, word: numberToWords(n) };
});

/* A gentle cycling palette for number cards */
const NUMBER_COLORS = [
  "#ff8a3d", "#4caf50", "#2196f3", "#e91e63", "#9c27b0",
  "#00bcd4", "#ffc107", "#f44336", "#673ab7", "#009688",
];

const PRAISE = ["Great job!", "Awesome!", "You did it!", "Super!", "Wow, well done!", "Fantastic!"];
const ENCOURAGE = ["Try again, you can do it!", "Almost! Keep going!", "Oops! Let's try the next one!"];

const QUIZ_LENGTH = 10;

/* ---------- DOM refs ---------- */
const $ = (id) => document.getElementById(id);

const learnScreen = $("learnScreen");
const quizScreen = $("quizScreen");
const numbersLearnScreen = $("numbersLearnScreen");
const numbersQuizScreen = $("numbersQuizScreen");

const btnLearnMode = $("btnLearnMode");
const btnQuizMode = $("btnQuizMode");
const btnLearnNumbersMode = $("btnLearnNumbersMode");
const btnNumbersQuizMode = $("btnNumbersQuizMode");

const showcase = $("showcase");
const showcaseLetter = $("showcaseLetter");
const showcaseWord = $("showcaseWord");
const showcaseWords = $("showcaseWords");
const showcaseSound = $("showcaseSound");
const btnCloseShowcase = $("btnCloseShowcase");
const btnPrevLetter = $("btnPrevLetter");
const btnNextLetter = $("btnNextLetter");
const btnSpeakLetter = $("btnSpeakLetter");

const numberShowcase = $("numberShowcase");
const numberShowcaseTile = $("numberShowcaseTile");
const numberShowcaseWord = $("numberShowcaseWord");
const btnCloseNumberShowcase = $("btnCloseNumberShowcase");
const btnPrevNumber = $("btnPrevNumber");
const btnNextNumber = $("btnNextNumber");
const btnSpeakNumber = $("btnSpeakNumber");

const showcaseEmoji = $("showcaseEmoji");
const numberCountEmojis = $("numberCountEmojis");
const burstLayer = $("burstLayer");
const learnGuide = $("learnGuide");
const numGuide = $("numGuide");

const quizProgressFill = $("quizProgressFill");
const quizScore = $("quizScore");
const btnAskName = $("btnAskName");
const btnAskPhonic = $("btnAskPhonic");
const quizPrompt = $("quizPrompt");
const quizTarget = $("quizTarget");
const btnReplayQuestion = $("btnReplayQuestion");
const quizOptions = $("quizOptions");

const numQuizProgressFill = $("numQuizProgressFill");
const numQuizScore = $("numQuizScore");
const btnAskNumber = $("btnAskNumber");
const btnAskNumberWord = $("btnAskNumberWord");
const numQuizPrompt = $("numQuizPrompt");
const numQuizTarget = $("numQuizTarget");
const btnNumReplayQuestion = $("btnNumReplayQuestion");
const numQuizOptions = $("numQuizOptions");

const btnZoomOut = $("btnZoomOut");
const btnZoomIn = $("btnZoomIn");
const zoomValue = $("zoomValue");

const celebration = $("celebration");
const celebrationMessage = $("celebrationMessage");
const celebrationStars = $("celebrationStars");
const btnLearnEnglish = $("btnLearnEnglish");
const btnEnglishQuiz = $("btnEnglishQuiz");
const btnLearnNumbers = $("btnLearnNumbers");
const btnNumbersQuiz = $("btnNumbersQuiz");

/* ---------- Speech helper ---------- */
let speechOK = "speechSynthesis" in window;
let selectedVoice = null;
let voiceList = [];
let voiceIndex = -1;
let pendingSpeakTimer = null;
let spellSeqTimer = null;
let spellSeqOn = false;
let seqGeneration = 0;

function refreshVoices() {
  if (!speechOK) return;
  const all = speechSynthesis.getVoices();
  const en = all.filter((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
  voiceList = en.length ? en : all.slice();
  if (!voiceList.length) return;
  if (voiceIndex < 0 || voiceIndex >= voiceList.length) voiceIndex = 0;
  selectedVoice = voiceList[voiceIndex];
}

function pickVoice() {
  if (!speechOK) return;
  const voices = speechSynthesis.getVoices();
  const en = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
  selectedVoice = en || voices[0] || null;
}

if (speechOK) {
  pickVoice();
  speechSynthesis.onvoiceschanged = () => {
    pickVoice();
    refreshVoices();
  };
}

const btnVoice = $("btnVoice");

btnVoice.addEventListener("click", () => {
  if (!speechOK) return;
  stopSpeaking();
  refreshVoices();
  if (!voiceList.length) {
    speak("No other voices found on this device.");
    return;
  }
  voiceIndex = (voiceIndex + 1) % voiceList.length;
  selectedVoice = voiceList[voiceIndex];
  btnVoice.textContent = `🗣️ Voice-${voiceIndex + 1}`;
  speak(`Hi! This is my new voice number ${voiceIndex + 1}.`, 0.9);
});

function speakUtterance(text, rate) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = rate;
  utter.pitch = 1.1;
  if (selectedVoice) utter.voice = selectedVoice;
  return utter;
}

/* Stop everything: current utterance, pending starts, and spelling sequences */
function stopSpeaking() {
  spellSeqOn = false;
  seqGeneration++;
  if (spellSeqTimer) {
    clearTimeout(spellSeqTimer);
    spellSeqTimer = null;
  }
  if (pendingSpeakTimer) {
    clearTimeout(pendingSpeakTimer);
    pendingSpeakTimer = null;
  }
  if (speechOK) speechSynthesis.cancel();
}

function speak(text, rate = 0.8) {
  if (!speechOK) return;
  stopSpeaking();
  // A short delay after cancel avoids the browser replaying the start of
  // the previous utterance alongside the new one.
  pendingSpeakTimer = setTimeout(() => {
    pendingSpeakTimer = null;
    speechSynthesis.speak(speakUtterance(text, rate));
  }, 40);
}

/* Speak short parts one by one with an audible pause between them.
   Pass a "__pause__" marker to wait a longer beat without speaking.
   onComplete fires once the whole sequence has finished speaking. */
function speakSequence(parts, gapMs = 280, breakMs = 600, onComplete) {
  if (!speechOK || !parts.length) {
    if (typeof onComplete === "function") onComplete();
    return;
  }
  stopSpeaking();
  spellSeqOn = true;
  const gen = seqGeneration;
  let i = 0;
  const speakNext = () => {
    if (gen !== seqGeneration || !spellSeqOn || i >= parts.length) {
      if (gen === seqGeneration) {
        spellSeqOn = false;
        if (typeof onComplete === "function") onComplete();
      }
      return;
    }
    const item = parts[i];
    i++;
    if (item === "__pause__") {
      spellSeqTimer = setTimeout(speakNext, breakMs);
      return;
    }
    const utter = speakUtterance(String(item), 0.9);
    utter.onend = () => {
      if (gen !== seqGeneration) return;
      spellSeqOn && i < parts.length
        ? (spellSeqTimer = setTimeout(speakNext, gapMs))
        : finish();
    };
    utter.onerror = finish;
    function finish() {
      if (gen !== seqGeneration) return;
      spellSeqOn = false;
      if (typeof onComplete === "function") onComplete();
    }
    speechSynthesis.speak(utter);
  };
  spellSeqTimer = setTimeout(speakNext, 60);
}

/* ---------- Small utilities ---------- */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Pick a readable text color: dark text on light backgrounds, white on dark */
function textColorFor(bg) {
  const r = parseInt(bg.slice(1, 3), 16);
  const g = parseInt(bg.slice(3, 5), 16);
  const b = parseInt(bg.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness >= 128 ? "#263238" : "#ffffff";
}

/* Build a card's inner HTML: big uppercase + smaller lowercase */
function cardInner(letterData, upperClass, lowerClass) {
  return `
    <span class="${upperClass}">${letterData.letter}</span>
    <span class="${lowerClass}">${letterData.letter.toLowerCase()}</span>
  `;
}

/* Build a number tile: big number + smaller word */
function numberInner(numData, upperClass, lowerClass) {
  return `
    <span class="${upperClass}">${numData.number}</span>
    <span class="${lowerClass}">${numData.word}</span>
  `;
}

/* ---------- Mode switching ---------- */
const ALL_SCREENS = [learnScreen, quizScreen, numbersLearnScreen, numbersQuizScreen];
const ALL_MODE_BTNS = [btnLearnMode, btnQuizMode, btnLearnNumbersMode, btnNumbersQuizMode];
const SCREEN_MASCOT_KEY = {
  learnScreen: "learn",
  quizScreen: "quiz",
  numbersLearnScreen: "numlearn",
  numbersQuizScreen: "numquiz",
};

function showScreen(screen, modeBtn) {
  ALL_SCREENS.forEach((s) => s.classList.toggle("hidden", s !== screen));
  ALL_MODE_BTNS.forEach((b) => b.classList.toggle("active", b === modeBtn));
  const activeKey = SCREEN_MASCOT_KEY[screen.id];
  document.querySelectorAll(".mascot").forEach((m) => {
    m.classList.toggle("hidden", m.dataset.screen !== activeKey);
  });
}

function stopAllSpeech() {
  stopAutoPlay();
  stopNumberAutoPlay();
  stopQuestionRepeat();
  stopNumberQuestionRepeat();
  stopSpeaking();
}

btnLearnMode.addEventListener("click", () => {
  stopAllSpeech();
  showScreen(learnScreen, btnLearnMode);
  speak("Let's learn the alphabet!");
});

btnQuizMode.addEventListener("click", () => {
  stopAllSpeech();
  showScreen(quizScreen, btnQuizMode);
  startQuiz();
});

btnLearnNumbersMode.addEventListener("click", () => {
  stopAllSpeech();
  showScreen(numbersLearnScreen, btnLearnNumbersMode);
  speak("Let's learn numbers!");
});

btnNumbersQuizMode.addEventListener("click", () => {
  stopAllSpeech();
  showScreen(numbersQuizScreen, btnNumbersQuizMode);
  startNumberQuiz();
});

let zoomLevel = 1;
const ZOOM_MIN = 0.6;
const ZOOM_MAX = 2;

function applyZoom() {
  zoomValue.textContent = Math.round(zoomLevel * 100) + "%";
  document.documentElement.style.setProperty("--zoom", zoomLevel);
  document.documentElement.style.fontSize = zoomLevel + "rem";
}

btnZoomOut.addEventListener("click", () => {
  zoomLevel = Math.max(ZOOM_MIN, Math.round((zoomLevel - 0.1) * 10) / 10);
  applyZoom();
});

btnZoomIn.addEventListener("click", () => {
  zoomLevel = Math.min(ZOOM_MAX, Math.round((zoomLevel + 0.1) * 10) / 10);
  applyZoom();
});

/* ---------- Learn English ---------- */
/* Build a 5-column table grid from items. Each cell holds a button card. */
function buildTableGrid(container, items, cardClass, innerFn, upperClass, lowerClass, colorFn, onClick) {
  const wrapper = document.createElement("div");
  wrapper.className = "grid-scroll";
  const table = document.createElement("table");
  table.className = cardClass === "letter-card" ? "letter-grid" : "number-grid";
  table.setAttribute("aria-label", cardClass === "letter-card" ? "Alphabet letters" : "Numbers 1 to 100");
  const tbody = document.createElement("tbody");
  for (let i = 0; i < items.length; i += 5) {
    const tr = document.createElement("tr");
    for (let j = i; j < Math.min(i + 5, items.length); j++) {
      const td = document.createElement("td");
      const btn = document.createElement("button");
      btn.className = cardClass;
      btn.style.backgroundColor = colorFn(j);
      const color = textColorFor(btn.style.backgroundColor);
      btn.style.color = color;
      btn.style.textShadow = color === "#ffffff" ? "0 2px 3px rgba(0,0,0,0.35)" : "none";
      btn.innerHTML = innerFn(items[j], upperClass, lowerClass);
      btn.addEventListener("click", () => onClick(j));
      td.appendChild(btn);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  wrapper.appendChild(table);
  container.replaceWith(wrapper);
  return wrapper;
}

buildTableGrid(
  $("letterGrid"),
  LETTERS,
  "letter-card",
  cardInner,
  "upper",
  "lower",
  (i) => COLORS[i % COLORS.length],
  (i) => openShowcase(i)
);

/* Keyboard: press A–Z to open the matching letter */
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  if (!learnScreen.classList.contains("hidden")) {
    const key = e.key.toUpperCase();
    if (key >= "A" && key <= "Z") {
      const idx = LETTERS.findIndex((l) => l.letter === key);
      if (idx !== -1) openShowcase(idx);
    }
  }
});

let currentIndex = 0;
let listeningAll = false;
let autoplayTimer = null;
let playCount = 0;

function speakCurrentLetter() {
  const data = LETTERS[currentIndex];
  const words = (data.words || [data]).map((w) => w.word).join(", ");
  speak(`${data.letter}, ${words}`, 0.8);
}

/* Auto-play the current letter's word, advancing after 3 plays */
function startAutoPlay() {
  stopAutoPlay();
  playCount = 0;
  scheduleNextPlay();
}

function scheduleNextPlay() {
  const gap = 5000 + Math.random() * 3000; // random 5–8 seconds
  autoplayTimer = setTimeout(() => {
    playCount++;
    if (playCount >= 3) {
      currentIndex = (currentIndex + 1) % LETTERS.length;
      playCount = 0;
      renderShowcase();
      speakCurrentLetter();
    } else {
      speakCurrentLetter();
    }
    if (!showcase.classList.contains("hidden")) scheduleNextPlay();
  }, gap);
}

function stopAutoPlay() {
  if (autoplayTimer) {
    clearTimeout(autoplayTimer);
    autoplayTimer = null;
  }
}

function openShowcase(i) {
  currentIndex = i;
  showcase.classList.remove("hidden");
  learnGuide.classList.add("hidden");
  renderShowcase();
  showcase.scrollIntoView({ behavior: "smooth", block: "center" });
  speakCurrentLetter();
  startAutoPlay();
}

function renderShowcase() {
  const data = LETTERS[currentIndex];
  showcaseLetter.style.backgroundColor = COLORS[currentIndex % COLORS.length];
  showcaseLetter.innerHTML = cardInner(data, "upper", "lower");
  showcaseEmoji.innerHTML = data.words
    .map(
      (w, i) =>
        `<span class="showcase-emoji-item${i === 0 ? " featured" : ""}">${w.emoji}</span>`
    )
    .join("");
  showcaseWord.textContent = `${data.words[0].word} ${data.words[0].emoji}`;
  showcaseWords.innerHTML = data.words
    .map(
      (w, i) =>
        `<span class="word-chip${i === 0 ? " featured" : ""}">${w.word} ${w.emoji}</span>`
    )
    .join("");
  showcaseSound.textContent = `${data.letter} is for ${data.words.map((w) => w.word).join(", ")} — /${data.phonic}/`;
}

btnCloseShowcase.addEventListener("click", () => {
  stopAutoPlay();
  showcase.classList.add("hidden");
  learnGuide.classList.remove("hidden");
  if (listeningAll) stopListenAll();
  else speak("");
});

btnPrevLetter.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + LETTERS.length) % LETTERS.length;
  renderShowcase();
  speakCurrentLetter();
  startAutoPlay();
});

btnNextLetter.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % LETTERS.length;
  renderShowcase();
  speakCurrentLetter();
  startAutoPlay();
});

btnSpeakLetter.addEventListener("click", () => {
  speakCurrentLetter();
  startAutoPlay();
});

/* Listen to all: play A→Z with a highlight */
function stopListenAll() {
  listeningAll = false;
  stopAutoPlay();
  stopSpeaking();
  document.querySelectorAll("#learnScreen .letter-card").forEach((c) => c.classList.remove("pop"));
}

async function listenAll() {
  if (listeningAll) {
    stopListenAll();
    return;
  }
  listeningAll = true;
  const cards = document.querySelectorAll("#learnScreen .letter-card");
  for (let i = 0; i < LETTERS.length; i++) {
    if (!listeningAll) break;
    cards[i].classList.add("pop");
    speak(LETTERS[i].letter, 0.7);
    await new Promise((r) => setTimeout(r, 900));
    cards[i].classList.remove("pop");
  }
  listeningAll = false;
}

/* ---------- Learn Numbers ---------- */
buildTableGrid(
  $("numberGrid"),
  NUMBERS,
  "number-card",
  numberInner,
  "number-upper",
  "number-lower",
  (i) => NUMBER_COLORS[i % NUMBER_COLORS.length],
  (i) => openNumberShowcase(i)
);

let numCurrentIndex = 0;
let numAutoplayTimer = null;
let numPlayCount = 0;

/* Spell a number's word letter by letter, e.g. "Twenty-Five" ->
   [t,w,e,n,t,y,__pause__,f,i,v,e] (no "dash", with a pause between parts). */
function spellNumberParts(word) {
  const parts = [];
  for (const ch of word) {
    if (/[a-zA-Z]/.test(ch)) parts.push(ch);
    else if (ch === "-") parts.push("__pause__");
    // spaces and anything else are skipped
  }
  return parts;
}

function speakCurrentNumber(onComplete) {
  const data = NUMBERS[numCurrentIndex];
  speakSequence([
    String(data.number),
    ...spellNumberParts(data.word),
    String(data.number),
  ], 280, 600, onComplete);
}

/* Auto-play the current number, advancing after 3 plays */
function startNumberAutoPlay() {
  stopNumberAutoPlay();
  numPlayCount = 0;
  scheduleNumberPlay();
}

function scheduleNumberPlay() {
  const gap = 5000 + Math.random() * 3000; // random 5–8 seconds
  numAutoplayTimer = setTimeout(() => {
    numPlayCount++;
    if (numPlayCount >= 3) {
      numCurrentIndex = (numCurrentIndex + 1) % NUMBERS.length;
      numPlayCount = 0;
      renderNumberShowcase();
    }
    speakCurrentNumber(() => {
      if (!numberShowcase.classList.contains("hidden")) scheduleNumberPlay();
    });
  }, gap);
}

function stopNumberAutoPlay() {
  if (numAutoplayTimer) {
    clearTimeout(numAutoplayTimer);
    numAutoplayTimer = null;
  }
}

function openNumberShowcase(i) {
  stopNumberAutoPlay();
  numCurrentIndex = i;
  numberShowcase.classList.remove("hidden");
  numGuide.classList.add("hidden");
  renderNumberShowcase();
  numberShowcase.scrollIntoView({ behavior: "smooth", block: "center" });
  speakCurrentNumber(
    () => !numberShowcase.classList.contains("hidden") && startNumberAutoPlay()
  );
}

/* Animate the number's count with emojis:
   - n ≤ 10: first 5 appear immediately, the rest one by one (~3s total)
   - n > 10: groups of 10 appear at once, remainder one by one (0.5s each) */
const COUNT_EMOJIS = ["🐱", "🍎", "🐵", "🐰", "⭐", "🐶", "🍩", "🐼", "🌸", "🐸", "🍓", "🦄", "⚽", "🎈"];
let countAnimGen = 0;

function animateNumberCount(n) {
  countAnimGen++;
  const gen = countAnimGen;
  if (!numberCountEmojis) return;
  numberCountEmojis.innerHTML = "";
  numberCountEmojis.classList.remove("count-small", "count-tiny");
  if (n > 40) numberCountEmojis.classList.add("count-tiny");
  else if (n > 20) numberCountEmojis.classList.add("count-small");

  const emoji = COUNT_EMOJIS[Math.floor(Math.random() * COUNT_EMOJIS.length)];
  const addEmojis = (howMany) => {
    if (gen !== countAnimGen) return;
    for (let i = 0; i < howMany; i++) {
      const s = document.createElement("span");
      s.className = "count-emoji";
      s.textContent = emoji;
      numberCountEmojis.appendChild(s);
    }
  };

  if (n <= 10) {
    const first = Math.min(5, n);
    addEmojis(first);
    let shown = first;
    if (shown < n) {
      const interval = Math.max(400, Math.round(3000 / (n - shown)));
      const tick = () => {
        if (gen !== countAnimGen) return;
        addEmojis(1);
        shown++;
        if (shown < n) setTimeout(tick, interval);
      };
      setTimeout(tick, interval);
    }
  } else {
    const groups = Math.floor(n / 10);
    const rem = n % 10;
    let added = 0;
    const addGroup = () => {
      if (gen !== countAnimGen) return;
      addEmojis(10);
      added++;
      if (added < groups) {
        setTimeout(addGroup, 500);
      } else if (rem > 0) {
        let r = 0;
        const tick = () => {
          if (gen !== countAnimGen) return;
          addEmojis(1);
          r++;
          if (r < rem) setTimeout(tick, 500);
        };
        setTimeout(tick, 500);
      }
    };
    addGroup();
  }
}

function renderNumberShowcase() {
  const data = NUMBERS[numCurrentIndex];
  numberShowcaseTile.style.backgroundColor = NUMBER_COLORS[numCurrentIndex % NUMBER_COLORS.length];
  numberShowcaseTile.style.color = textColorFor(numberShowcaseTile.style.backgroundColor);
  numberShowcaseTile.style.textShadow = "none";
  numberShowcaseTile.innerHTML = numberInner(data, "upper", "lower");
  numberShowcaseWord.textContent = data.word;
  animateNumberCount(data.number);
}

btnCloseNumberShowcase.addEventListener("click", () => {
  stopNumberAutoPlay();
  countAnimGen++;
  numberCountEmojis.innerHTML = "";
  numberShowcase.classList.add("hidden");
  numGuide.classList.remove("hidden");
  speak("");
});

btnPrevNumber.addEventListener("click", () => {
  stopNumberAutoPlay();
  numCurrentIndex = (numCurrentIndex - 1 + NUMBERS.length) % NUMBERS.length;
  renderNumberShowcase();
  speakCurrentNumber(
    () => !numberShowcase.classList.contains("hidden") && startNumberAutoPlay()
  );
});

btnNextNumber.addEventListener("click", () => {
  stopNumberAutoPlay();
  numCurrentIndex = (numCurrentIndex + 1) % NUMBERS.length;
  renderNumberShowcase();
  speakCurrentNumber(
    () => !numberShowcase.classList.contains("hidden") && startNumberAutoPlay()
  );
});

btnSpeakNumber.addEventListener("click", () => {
  stopNumberAutoPlay();
  speakCurrentNumber(
    () => !numberShowcase.classList.contains("hidden") && startNumberAutoPlay()
  );
});

/* ---------- English Quiz ---------- */
let quizMode = "name"; // "name" | "phonic"
let questions = [];
let questionIndex = 0;
let score = 0;
let locked = false;
let questionTimer = null;

function speakQuestion() {
  const q = questions[questionIndex];
  if (quizMode === "name") {
    speak(`Find the letter ${q.target.letter}`, 0.8);
  } else {
    speak(`Which letter makes the sound ${q.target.phonic}?`, 0.8);
  }
}

/* Repeat the question every 5 seconds until the user answers */
function startQuestionRepeat() {
  stopQuestionRepeat();
  questionTimer = setInterval(() => {
    if (!quizScreen.classList.contains("hidden") && !locked) speakQuestion();
  }, 5000);
}

function stopQuestionRepeat() {
  if (questionTimer) {
    clearInterval(questionTimer);
    questionTimer = null;
  }
}

btnAskName.addEventListener("click", () => {
  quizMode = "name";
  btnAskName.classList.add("active");
  btnAskPhonic.classList.remove("active");
  renderQuestion();
});

btnAskPhonic.addEventListener("click", () => {
  quizMode = "phonic";
  btnAskPhonic.classList.add("active");
  btnAskName.classList.remove("active");
  renderQuestion();
});

function buildQuestions() {
  const pool = shuffle(LETTERS).slice(0, QUIZ_LENGTH);
  return pool.map((target) => {
    const others = shuffle(LETTERS.filter((l) => l.letter !== target.letter)).slice(0, 3);
    return { target, options: shuffle([target, ...others]) };
  });
}

function startQuiz() {
  stopQuestionRepeat();
  questions = buildQuestions();
  questionIndex = 0;
  score = 0;
  locked = false;
  quizProgressFill.style.width = "0%";
  quizScore.textContent = "⭐ 0";
  renderQuestion();
}

function renderQuestion() {
  stopQuestionRepeat();
  locked = false;
  const q = questions[questionIndex];
  quizProgressFill.style.width = `${(questionIndex / QUIZ_LENGTH) * 100}%`;

  if (quizMode === "name") {
    quizPrompt.textContent = "Find the letter…";
    quizTarget.innerHTML = cardInner(q.target, "upper", "lower");
    const bg = COLORS[LETTERS.indexOf(q.target) % COLORS.length];
    const fg = textColorFor(bg);
    quizTarget.style.backgroundColor = bg;
    quizTarget.style.color = fg;
    quizTarget.style.textShadow = fg === "#ffffff" ? "0 4px 0 rgba(0, 0, 0, 0.2)" : "none";
    quizTarget.classList.remove("hidden");
  } else {
    quizPrompt.textContent = "Which letter makes this sound?";
    quizTarget.classList.add("hidden");
    quizTarget.innerHTML = "";
  }

  quizOptions.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.style.backgroundColor = COLORS[LETTERS.indexOf(opt) % COLORS.length];
    btn.style.color = textColorFor(btn.style.backgroundColor);
    btn.innerHTML = cardInner(opt, "upper", "lower");
    btn.addEventListener("click", () => answer(opt, btn));
    quizOptions.appendChild(btn);
  });

  speakQuestion();
  startQuestionRepeat();
}

function answer(opt, btn) {
  if (locked) return;
  locked = true;
  stopQuestionRepeat();

  const q = questions[questionIndex];
  const isCorrect = opt.letter === q.target.letter;
  const correctBtn = [...quizOptions.children].find(
    (b) => b.querySelector(".upper").textContent === q.target.letter
  );

  if (isCorrect) {
    score++;
    btn.classList.add("correct");
    quizScore.textContent = `⭐ ${score}`;
    speak(randItem(PRAISE), 1);
    emojiBurst();
  } else {
    btn.classList.add("wrong");
    correctBtn.classList.add("correct");
    speak(randItem(ENCOURAGE), 1);
  }

  quizOptions.querySelectorAll(".quiz-option").forEach((b) => {
    if (b !== correctBtn && b !== btn) b.classList.add("dim");
  });

  setTimeout(() => {
    questionIndex++;
    if (questionIndex >= QUIZ_LENGTH) {
      quizProgressFill.style.width = "100%";
      showCelebration("quiz");
    } else {
      renderQuestion();
    }
  }, 1600);
}

/* Keyboard: answer by pressing a letter key, but only keys shown as options */
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  if (quizScreen.classList.contains("hidden") || locked) return;
  const key = e.key.toUpperCase();
  if (key < "A" || key > "Z") return;
  const btn = [...quizOptions.children].find(
    (b) => b.querySelector(".upper").textContent === key
  );
  const opt = LETTERS.find((l) => l.letter === key);
  if (btn && opt) answer(opt, btn);
});

/* ---------- Numbers Quiz ---------- */
let numQuizMode = "number"; // "number" | "word"
let numQuestions = [];
let numQuestionIndex = 0;
let numScore = 0;
let numLocked = false;
let numQuestionTimer = null;

function speakNumberQuestion() {
  const q = numQuestions[numQuestionIndex];
  if (numQuizMode === "number") {
    speak(`Find the number ${q.target.number}`, 0.8);
  } else {
    speak(`Which number is ${q.target.word}?`, 0.8);
  }
}

function startNumberQuestionRepeat() {
  stopNumberQuestionRepeat();
  numQuestionTimer = setInterval(() => {
    if (!numbersQuizScreen.classList.contains("hidden") && !numLocked) speakNumberQuestion();
  }, 5000);
}

function stopNumberQuestionRepeat() {
  if (numQuestionTimer) {
    clearInterval(numQuestionTimer);
    numQuestionTimer = null;
  }
}

btnAskNumber.addEventListener("click", () => {
  numQuizMode = "number";
  btnAskNumber.classList.add("active");
  btnAskNumberWord.classList.remove("active");
  renderNumberQuestion();
});

btnAskNumberWord.addEventListener("click", () => {
  numQuizMode = "word";
  btnAskNumberWord.classList.add("active");
  btnAskNumber.classList.remove("active");
  renderNumberQuestion();
});

function buildNumberQuestions() {
  const pool = shuffle(NUMBERS).slice(0, QUIZ_LENGTH);
  return pool.map((target) => {
    const others = shuffle(NUMBERS.filter((n) => n.number !== target.number)).slice(0, 3);
    return { target, options: shuffle([target, ...others]) };
  });
}

function startNumberQuiz() {
  stopNumberQuestionRepeat();
  numQuestions = buildNumberQuestions();
  numQuestionIndex = 0;
  numScore = 0;
  numLocked = false;
  numQuizProgressFill.style.width = "0%";
  numQuizScore.textContent = "⭐ 0";
  renderNumberQuestion();
}

function renderNumberQuestion() {
  stopNumberQuestionRepeat();
  numLocked = false;
  const q = numQuestions[numQuestionIndex];
  numQuizProgressFill.style.width = `${(numQuestionIndex / QUIZ_LENGTH) * 100}%`;

  if (numQuizMode === "number") {
    numQuizPrompt.textContent = "Find the number…";
    numQuizTarget.innerHTML = numberInner(q.target, "upper", "lower");
    const bg = NUMBER_COLORS[NUMBERS.indexOf(q.target) % NUMBER_COLORS.length];
    const fg = textColorFor(bg);
    numQuizTarget.style.backgroundColor = bg;
    numQuizTarget.style.color = fg;
    numQuizTarget.style.textShadow = fg === "#ffffff" ? "0 4px 0 rgba(0, 0, 0, 0.2)" : "none";
    numQuizTarget.classList.remove("hidden");
  } else {
    numQuizPrompt.textContent = "Tap the matching number…";
    numQuizTarget.classList.add("hidden");
    numQuizTarget.innerHTML = "";
  }

  numQuizOptions.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option number-option";
    btn.style.backgroundColor = NUMBER_COLORS[NUMBERS.indexOf(opt) % NUMBER_COLORS.length];
    btn.style.color = textColorFor(btn.style.backgroundColor);
    btn.innerHTML = numberInner(opt, "upper", "lower");
    btn.addEventListener("click", () => answerNumber(opt, btn));
    numQuizOptions.appendChild(btn);
  });

  speakNumberQuestion();
  startNumberQuestionRepeat();
}

function answerNumber(opt, btn) {
  if (numLocked) return;
  numLocked = true;
  stopNumberQuestionRepeat();

  const q = numQuestions[numQuestionIndex];
  const isCorrect = opt.number === q.target.number;
  const correctBtn = [...numQuizOptions.children].find(
    (b) => parseInt(b.querySelector(".upper").textContent, 10) === q.target.number
  );

  if (isCorrect) {
    numScore++;
    btn.classList.add("correct");
    numQuizScore.textContent = `⭐ ${numScore}`;
    speak(randItem(PRAISE), 1);
    emojiBurst();
  } else {
    btn.classList.add("wrong");
    correctBtn.classList.add("correct");
    speak(randItem(ENCOURAGE), 1);
  }

  numQuizOptions.querySelectorAll(".quiz-option").forEach((b) => {
    if (b !== correctBtn && b !== btn) b.classList.add("dim");
  });

  setTimeout(() => {
    numQuestionIndex++;
    if (numQuestionIndex >= QUIZ_LENGTH) {
      numQuizProgressFill.style.width = "100%";
      showCelebration("numbersQuiz");
    } else {
      renderNumberQuestion();
    }
  }, 1600);
}

/* Keyboard: answer with number keys 0-9, or arrow keys for quick play */
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  if (numbersQuizScreen.classList.contains("hidden") || numLocked) return;
  const key = e.key;
  if (!/^\d$/.test(key)) return;
  const digit = parseInt(key, 10);
  const opt = NUMBERS.find((n) => n.number === digit);
  if (!opt) return;
  const btn = [...numQuizOptions.children].find(
    (b) => parseInt(b.querySelector(".upper").textContent, 10) === digit
  );
  if (btn) answerNumber(opt, btn);
});

/* ---------- Celebration ---------- */
/* Happy emoji burst on correct answers */
const BURST_EMOJIS = ["🐵", "🐯", "🐱", "🦁", "🐻", "🐶", "🐰", "🦄", "🐨", "🐼", "🦊", "🐸", "🌟", "⭐", "🎉", "💥", "🎈"];

function emojiBurst(count = 14) {
  if (!burstLayer) return;
  burstLayer.classList.remove("hidden");
  burstLayer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const e = document.createElement("span");
    e.className = "burst-emoji";
    e.textContent = BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)];
    e.style.left = "50%";
    e.style.top = "50%";
    e.style.fontSize = (1.6 + Math.random() * 2.4) + "rem";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 90 + Math.random() * 130;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 40;
    e.style.setProperty("--dx", dx + "px");
    e.style.setProperty("--dy", dy + "px");
    e.style.animationDelay = (Math.random() * 0.12) + "s";
    burstLayer.appendChild(e);
  }
  setTimeout(() => burstLayer.classList.add("hidden"), 1100);
}

function showCelebration(sourceQuiz) {
  const finalScore = sourceQuiz === "numbersQuiz" ? numScore : score;
  celebrationMessage.textContent =
    finalScore === QUIZ_LENGTH
      ? "Perfect! You got every single one right!"
      : `You got ${finalScore} out of ${QUIZ_LENGTH} correct!`;
  celebrationStars.textContent = "⭐".repeat(Math.max(1, Math.ceil(finalScore / 2)));
  celebration.classList.remove("hidden");
  speak(
    finalScore === QUIZ_LENGTH
      ? "Perfect score! You are amazing!"
      : `You got ${finalScore} out of ${QUIZ_LENGTH}. Well done!`,
    0.9
  );
}

btnLearnEnglish.addEventListener("click", () => {
  celebration.classList.add("hidden");
  showScreen(learnScreen, btnLearnMode);
});

btnEnglishQuiz.addEventListener("click", () => {
  celebration.classList.add("hidden");
  showScreen(quizScreen, btnQuizMode);
  startQuiz();
});

btnLearnNumbers.addEventListener("click", () => {
  celebration.classList.add("hidden");
  showScreen(numbersLearnScreen, btnLearnNumbersMode);
});

btnNumbersQuiz.addEventListener("click", () => {
  celebration.classList.add("hidden");
  showScreen(numbersQuizScreen, btnNumbersQuizMode);
  startNumberQuiz();
});

/* Celebration: 1 = Learn English, 2 = English Quiz, 3 = Learn Numbers, 4 = Numbers Quiz */
document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  if (celebration.classList.contains("hidden")) return;
  if (e.key === "1") {
    celebration.classList.add("hidden");
    showScreen(learnScreen, btnLearnMode);
  } else if (e.key === "2") {
    celebration.classList.add("hidden");
    showScreen(quizScreen, btnQuizMode);
    startQuiz();
  } else if (e.key === "3") {
    celebration.classList.add("hidden");
    showScreen(numbersLearnScreen, btnLearnNumbersMode);
  } else if (e.key === "4") {
    celebration.classList.add("hidden");
    showScreen(numbersQuizScreen, btnNumbersQuizMode);
    startNumberQuiz();
  }
});

btnReplayQuestion.addEventListener("click", () => {
  speakQuestion();
});

btnNumReplayQuestion.addEventListener("click", () => {
  speakNumberQuestion();
});

/* ---------- Init ---------- */
showScreen(learnScreen, btnLearnMode);
