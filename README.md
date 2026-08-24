# ACM-W & AI Quick Quiz

A responsive, single-page quiz application created for the ACM-W recruitment challenge. The app turns introductory topics in ACM-W and Artificial Intelligence into a clear, friendly quiz experience with real-time progress, answer validation, final scoring, and an answer review.

## Live project

This repository is ready to deploy with GitHub Pages. Follow the [deployment instructions](#deploy-with-github-pages) below to publish it.

## Features

- Ten multiple-choice questions covering ACM-W, ACM, and foundational AI concepts.
- One-question-at-a-time flow to keep the experience focused.
- Visible progress bar, question number, and answered-question counter.
- Required-answer validation before advancing.
- Back navigation that preserves previous choices.
- Automatic score calculation after the last answer.
- Results screen with tailored feedback and a question-by-question answer review.
- One-click restart flow.
- Responsive layout for desktop and mobile screens.
- No dependencies or build tooling required.

## Preview of the quiz flow

1. The first question appears with four selectable answers.
2. The user selects one answer and proceeds with **Next question**.
3. The app stores every selected answer as the user moves through the quiz.
4. On the final question, **See my score** calculates the result.
5. The results view shows the score, feedback, and corrections for any missed questions.

## Tech stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and accessible quiz markup |
| CSS3 | Responsive styling, layout, visual states, and animations |
| Vanilla JavaScript | Question rendering, state management, navigation, validation, and scoring |
| Google Fonts | Manrope and DM Mono typography |

The project uses plain HTML, CSS, and JavaScript deliberately: it is fast to load, easy to understand, and can be hosted on any static hosting service.

## Project structure

```text
acmw-ai-quick-quiz/
├── index.html      # Quiz page and semantic UI structure
├── styles.css      # Responsive visual design
├── script.js       # Questions, interactions, scoring, and answer review
├── README.md       # Project documentation
└── .gitignore      # Local system-file exclusions
```

## Run locally

Because this is a static site, there is no installation step.

### Option 1: Open the file directly

Download or clone this repository, then double-click `index.html` to open it in a modern browser.

### Option 2: Use a local server

Serving the directory locally more closely matches a deployed website. From the project folder, run either command:

```bash
# Python 3
python -m http.server 8000
```

```bash
# Node.js
npx serve .
```

Then visit `http://localhost:8000` in your browser.

## Customize the quiz

All questions live in the `questions` array near the top of `script.js`. Each question follows this shape:

```js
{
  question: "What does ACM stand for?",
  options: ["Correct answer", "Option two", "Option three", "Option four"],
  answer: 0
}
```

- Add another object to create a new question.
- Update the `options` array to change the available choices.
- Set `answer` to the zero-based index of the correct option. For example, `0` means the first option is correct.
- The progress counter and scoring total update automatically based on the number of questions in the array.

## Deploy with GitHub Pages

GitHub Pages can host this project directly from the repository.

1. Open the repository on GitHub.
2. Select **Settings**.
3. In the left sidebar, select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/(root)` folder.
6. Select **Save**.

After GitHub finishes publishing, the site will be available at:

[https://devanshi-08.github.io/acmw-ai-quick-quiz/]


## Accessibility notes

- Quiz answers use native radio inputs, so they can be selected with a keyboard.
- The current question, answer validation message, and final result are announced to assistive technologies.
- Buttons use clear labels and have disabled states where relevant.
- The layout adapts to small screens without requiring horizontal scrolling.

## Future improvements

Potential extensions for a future iteration include:

- Shuffle question order and answers for each attempt.
- Add a timer and a high-score leaderboard.
- Load questions from Firebase or Supabase.
- Let users select a category or difficulty level.
- Save in-progress quiz answers in local storage.
- Add dark mode and sound preferences.

## License

This project was created as an ACM-W recruitment task submission. Adapt or reuse it according to the requirements of your submission or organization.
