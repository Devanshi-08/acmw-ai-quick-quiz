const questions = [
  { question: "What does ACM stand for?", options: ["Association for Computing Machinery", "Academy of Computer Management", "Alliance for Code Makers", "Applied Computing Movement"], answer: 0 },
  { question: "What is the main purpose of ACM-W?", options: ["To organize gaming tournaments", "To support and celebrate women in computing", "To sell programming hardware", "To replace university CS departments"], answer: 1 },
  { question: "Which field focuses on making computers perform tasks associated with human intelligence?", options: ["Computer graphics", "Artificial Intelligence", "Networking", "Cybersecurity"], answer: 1 },
  { question: "A system that improves using examples or data is using…", options: ["Machine learning", "Word processing", "Virtual memory", "Web hosting"], answer: 0 },
  { question: "In a quiz classifier, the possible answers are best described as…", options: ["Labels", "Pixels", "Cables", "Cookies"], answer: 0 },
  { question: "Which is a common AI application?", options: ["A recommendation system", "A paper clip", "A USB cable", "A keyboard shortcut"], answer: 0 },
  { question: "Why is diverse participation valuable in computing?", options: ["It brings more perspectives to solve problems", "It makes code run slower", "It removes the need for testing", "It only changes screen colors"], answer: 0 },
  { question: "What is a dataset?", options: ["A collection of data used for analysis or learning", "A type of computer monitor", "An error message", "A programming language"], answer: 0 },
  { question: "What does an algorithm do?", options: ["Provides a step-by-step method to solve a problem", "Makes a computer physically smaller", "Connects two monitors", "Stores electricity"], answer: 0 },
  { question: "Which practice helps make an AI system more trustworthy?", options: ["Testing for bias and evaluating its outcomes", "Hiding how it works", "Using no data at all", "Skipping user feedback"], answer: 0 }
];

let current = 0;
const answers = Array(questions.length).fill(null);
const form = document.querySelector("#quiz-form");
const container = document.querySelector("#question-container");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");
const validation = document.querySelector("#validation-message");

function renderQuestion() {
  const item = questions[current];
  container.innerHTML = `<span class="question-number">0${current + 1} / ${questions.length}</span><legend>${item.question}</legend><div class="options">${item.options.map((option, index) => `<label class="option"><input type="radio" name="answer" value="${index}" ${answers[current] === index ? "checked" : ""}><span>${option}</span></label>`).join("")}</div>`;
  document.querySelector("#question-counter").textContent = `Question ${current + 1} of ${questions.length}`;
  document.querySelector("#answered-counter").textContent = `${answers.filter(answer => answer !== null).length} answered`;
  document.querySelector("#progress-bar").style.width = `${((current + 1) / questions.length) * 100}%`;
  previousButton.disabled = current === 0;
  nextButton.innerHTML = current === questions.length - 1 ? "See my score <span aria-hidden=\"true\">→</span>" : "Next question <span aria-hidden=\"true\">→</span>";
  validation.textContent = "";
}

form.addEventListener("change", event => { if (event.target.name === "answer") { answers[current] = Number(event.target.value); validation.textContent = ""; document.querySelector("#answered-counter").textContent = `${answers.filter(answer => answer !== null).length} answered`; } });
previousButton.addEventListener("click", () => { if (current > 0) { current--; renderQuestion(); } });
nextButton.addEventListener("click", () => { if (answers[current] === null) { validation.textContent = "Choose an answer before continuing."; return; } if (current === questions.length - 1) showResults(); else { current++; renderQuestion(); } });

function showResults() {
  const score = answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
  form.hidden = true; document.querySelector(".progress-section").hidden = true;
  const results = document.querySelector("#results"); results.hidden = false;
  document.querySelector("#score-value").textContent = `${score}/${questions.length}`;
  document.querySelector("#result-heading").textContent = score >= 8 ? "Excellent work!" : score >= 5 ? "Strong start!" : "Keep exploring!";
  document.querySelector("#result-message").textContent = score >= 8 ? "You have a solid grasp of ACM-W's mission and the foundations of AI." : "Every question is a chance to learn - revisit the answers and give it another go.";
  document.querySelector("#answer-review").innerHTML = questions.map((item, index) => `<div class="review-item ${answers[index] === item.answer ? "correct" : "incorrect"}"><span>${answers[index] === item.answer ? "✓" : "↗"}</span><span>Q${index + 1}: ${answers[index] === item.answer ? "Correct" : `Correct answer: ${item.options[item.answer]}`}</span></div>`).join("");
}
document.querySelector("#restart-button").addEventListener("click", () => { current = 0; answers.fill(null); document.querySelector("#results").hidden = true; form.hidden = false; document.querySelector(".progress-section").hidden = false; renderQuestion(); });
renderQuestion();
