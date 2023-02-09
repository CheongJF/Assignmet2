const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"))

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0
let questionCounter = 0;
let availableQuestions = {};

let questions =[
    {
        question: "Bla",
        choice1: "<script>",
        choice2: "<javascript",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "Bla",
        choice1: "<script>",
        choice2: "<javascript",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 4
    },
    {
        question: "Bla",
        choice1: "<script>",
        choice2: "<javascript",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 2
    },
    {
        question: "Bla",
        choice1: "<script>",
        choice2: "<javascript",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 2
    },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(avalableQuestions);
    getNewQuestions();
};

getNewQuestion = () => {

        if(availableQuestions.length = 0 || questionCounter > MAX_QUESTIONS) {
            return window.location.assign("/end.html");
        }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.sataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();