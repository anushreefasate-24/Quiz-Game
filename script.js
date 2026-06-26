const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "Delhi", "Pune", "Chennai"],
        correct: 1
    },
    {
        question: "Which language is used for web?",
        answers: ["Python", "C++", "JavaScript", "Java"],
        correct: 2
    },
    {
        question: "2 + 2 = ?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;

    answerBtns.forEach((btn, index) => {
        btn.innerText = q.answers[index];
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.querySelector(".quiz-container").innerHTML =
        `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

loadQuestion(); 