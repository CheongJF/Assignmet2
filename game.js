const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "What does an engine do?",
    choice1: "It converts fuel into energy.",
    choice2: "It helps increase the car's horsepower.",
    choice3: "It's main purpose is to move the car from one place to another.",
    choice4: "It is used to heat up the car.",
    answer: 1
  },
  {
    question:
      "What car brands have a picture of a Lion?",
    choice1: "Toyota, Mitsubishi, Kia",
    choice2: "Infiniti, Alfa Romeo, Lamborghini",
    choice3: "Peugot, Holden, Saab",
    choice4: "Arden, Cizeta, Kaiser",
    answer: 3
  },
  {
    question: "Which of these car brands are from France?",
    choice1: "Lamborghini",
    choice2: "Ferrari",
    choice3: "Porsche",
    choice4: "Bugatti",
    answer: 4
  },
  {
    question: "Are suspensions important for all cars?",
    choice1: "Yes. It is for better comfortability for users.",
    choice2: "Yes. It improves the car's handling allowing it to safely accelerate, corner and brake.",
    choice3: "No. It is not important for cars on flat roads.",
    choice4: "No. It is not important for city cars.",
    answer: 2
  },
  {
    question:
      "What brand is the most popular in Asia?",
    choice1: "Subaru",
    choice2: "Proton",
    choice3: "Toyota",
    choice4: "Hyundai",
    answer: 3
  },
  {
    question: "What is the oldest car brand company out of the following?",
    choice1: "Vauxhall",
    choice2: "Peugeot",
    choice3: "Opel",
    choice4: "Mercedes-Benz",
    answer: 2
  },
  {
    question: "Which car brand company made the world's first diesel engine car?",
    choice1: "Mercedes-Benz",
    choice2: "Chevrolet",
    choice3: "Vauxhall",
    choice4: "Volvo",
    answer: 1
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("afterquiz.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();