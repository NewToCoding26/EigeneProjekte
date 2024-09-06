const quizData = [
    {
        question: "Who defeats Esidisi in the Battle Tendency arc?",
        options: {
            a: "Joseph Joestar",
            b: "Caesar Zeppeli",
            c: "Lisa Lisa",
            d: "Kars"
        },
        correctAnswer: 'a'
    },
    {
        question: "Which Stand does Hol Horse pair with The Emperor to create a deadly combination?",
        options: {
            a: "Hanged Man",
            b: "Justice",
            c: "Lovers",
            d: "The Sun"
        },
        correctAnswer: 'a'
    },
    {
        question: "In Diamond is Unbreakable what is the occupation of Rohan Kishibe?",
        options: {
            a: "Artist",
            b: "Detective",
            c: "Mangaka",
            d: "Sculptor"
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of Jotaro Kujo's daughter in Stone Ocean?",
        options: {
            a: "Jolyne Cujoh",
            b: "Ermes Costello",
            c: "Annakiss",
            d: "Foo Fighters"
        },
        correctAnswer: 'a'
    },
    {
        question: "Which Stand has the ability to erase time in Vento Aureo?",
        options: {
            a: "Aerosmith",
            b: "Gold Experience",
            c: "Sticky Fingers",
            d: "King Crimson"
        },
        correctAnswer: 'd'
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
    document.getElementById('quiz-section').innerHTML = `
        <h3>Your score: ${score}/${quizData.length}</h3>
        <button onclick="restartQuiz()" class="btn">Restart Quiz</button>
        <h2>Select Difficulty Level</h2>
        <button onclick="selectFanDifficulty()" class="btn">Beginner</button>
        <button onclick="selectVeteranDifficulty()" class="btn">Veteran</button>
    `;
}

// Function to restart the quiz by refreshing the page
function restartQuiz() {
    location.reload(); // Reloads the current page to restart the quiz
}

// Function to redirect to Fan difficulty page
function selectFanDifficulty() {
    window.location.href = "Beginner.html"; // Redirect to Fan difficulty page
}

// Function to redirect to Veteran difficulty page
function selectVeteranDifficulty() {
    window.location.href = "Veteran.html"; // Redirect to Veteran difficulty page
}

// Load the first question when the page is loaded
window.onload = loadQuestion;