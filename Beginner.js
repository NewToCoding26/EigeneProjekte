const quizData = [
    {
        question: "Who is the first JoJo in the JoJo's Bizarre Adventure series?",
        options: {
            a: "Joseph Joestar",
            b: "Jotaro Kujo",
            c: "Jonathan Joestar",
            d: "Josuke Higashikata"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of Dio's Stand in 'Stardust Crusaders'?",
        options: {
            a: "Star Platinum",
            b: "The World",
            c: "Crazy Diamond",
            d: "Silver Chariot"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which object does Kira Yoshikage love the most?",
        options: {
            a: "A book",
            b: "A watch",
            c: "A ring",
            d: "A hand"
        },
        correctAnswer: 'd'
    },
    {
        question: "Who is Joseph Joestar's mentor in 'Battle Tendency'?",
        options: {
            a: "Lisa Lisa",
            b: "Caesar Zeppeli",
            c: "Rudol von Stroheim",
            d: "Robert E.O. Speedwagon"
        },
        correctAnswer: 'a'
    },
    {
        question: "In 'Diamond is Unbreakable', what is the name of Josuke's Stand?",
        options: {
            a: "The Hand",
            b: "Crazy Diamond",
            c: "Killer Queen",
            d: "Heaven's Door"
        },
        correctAnswer: 'b'
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// Function to load the current question
function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    document.getElementById('question').innerText = currentQuiz.question;
    const buttons = document.querySelectorAll('.btn');
    buttons[0].innerText = currentQuiz.options.a;
    buttons[1].innerText = currentQuiz.options.b;
    buttons[2].innerText = currentQuiz.options.c;
    buttons[3].innerText = currentQuiz.options.d;

    // Reset button colors and state
    buttons.forEach(btn => {
        btn.style.backgroundColor = ""; // Reset colors
        btn.disabled = false; // Enable buttons
    });

    answered = false; // Reset answered state
}

// Function to handle answer selection
function answerQuestion(answer) {
    if (answered) return; // Prevent multiple answers

    const currentQuiz = quizData[currentQuestion];
    const buttons = document.querySelectorAll('.btn');

    // Disable buttons after answering
    buttons.forEach(btn => btn.disabled = true);

    // Highlight correct and wrong answers
    if (answer === currentQuiz.correctAnswer) {
        score++;
        document.querySelector(`[onclick="answerQuestion('${answer}')"]`).style.backgroundColor = "#90EE90";
    } else {
        document.querySelector(`[onclick="answerQuestion('${answer}')"]`).style.backgroundColor = "#FF474C";
        document.querySelector(`[onclick="answerQuestion('${currentQuiz.correctAnswer}')"]`).style.backgroundColor = "#90EE90";
    }

    answered = true; // Prevent further answers

    // Move to the next question after a delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            displayScore();
        }
    }, 500); // 0.5-second delay to show colors before next question
}

// Function to display the score and provide options to restart or change difficulty
function displayScore() {
    // Hide the quiz section
    document.getElementById('quiz-section').style.display = 'none';

    // Show the result section
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    // Update the score in the result section
    document.getElementById('score-text').innerText = `Your score: ${score}/${quizData.length}`;
}


// Function to restart the quiz by resetting the state and hiding the result section
function restartQuiz() {
    // Hide the result section
    document.getElementById('result-section').style.display = 'none';
    
    // Show the quiz section
    document.getElementById('quiz-section').style.display = 'block';

    // Reset the quiz
    currentQuestion = 0;
    score = 0;
    loadQuestion(); // Load the first question again
}

// Function to redirect to Fan difficulty page
function selectFanDifficulty() {
    // Hide the result section
    document.getElementById('result-section').style.display = 'none';
    
    // Show the quiz section
    document.getElementById('quiz-section').style.display = 'block';

    // Optionally reset the quiz if needed
    currentQuestion = 0;
    score = 0;
    loadQuestion(); // Load questions for Fan difficulty
}

// Function to redirect to Veteran difficulty page
function selectVeteranDifficulty() {
    // Hide the result section
    document.getElementById('result-section').style.display = 'none';

    // Show the quiz section
    document.getElementById('quiz-section').style.display = 'block';

    // Optionally reset the quiz if needed
    currentQuestion = 0;
    score = 0;
    loadQuestion(); // Load questions for Veteran difficulty
}


// Load the first question when the page is loaded
window.onload = loadQuestion;




