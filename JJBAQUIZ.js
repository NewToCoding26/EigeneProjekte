// redirect to annother page
function redirectToQuiz(difficulty) {
    // Redirect to the corresponding quiz page
    window.location.href = `${difficulty}.html`;
}
// Example questions database
const questions = {
    Beginner: [
        { question: "What is 2 + 2?", correctAnswer: "a", options: { a: "4", b: "3", c: "5", d: "6" } },
        { question: "What is the color of the sky?", correctAnswer: "b", options: { a: "Green", b: "Blue", c: "Red", d: "Yellow" } }
    ],
    Fan: [
        { question: "What is the square root of 9?", correctAnswer: "c", options: { a: "2", b: "5", c: "3", d: "4" } },
        { question: "What is the capital of France?", correctAnswer: "a", options: { a: "Paris", b: "London", c: "Berlin", d: "Rome" } }
    ],
    Veteran: [
        { question: "What is 15 * 15?", correctAnswer: "d", options: { a: "200", b: "100", c: "150", d: "225" } },
        { question: "What is the chemical symbol for gold?", correctAnswer: "a", options: { a: "Au", b: "Ag", c: "Pb", d: "Pt" } }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;

function startQuiz(difficulty) {
    // Hide the difficulty selection and show the quiz section
    document.getElementById('difficulty-selection').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');

    // Load the questions based on selected difficulty
    currentQuestions = questions[difficulty];
    currentQuestionIndex = 0;

    // Display the first question
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const questionData = currentQuestions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;

        // Set answer button text
        document.querySelector('button[onclick="answerQuestion(\'a\')"]').textContent = questionData.options.a;
        document.querySelector('button[onclick="answerQuestion(\'b\')"]').textContent = questionData.options.b;
        document.querySelector('button[onclick="answerQuestion(\'c\')"]').textContent = questionData.options.c;
        document.querySelector('button[onclick="answerQuestion(\'d\')"]').textContent = questionData.options.d;
    } else {
        // No more questions
        document.getElementById('question').textContent = "Quiz Over!";
        // Optionally, you can hide the answer buttons or show a "restart" button
    }
}

function answerQuestion(answer) {
    const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }

    // Move to the next question
    currentQuestionIndex++;
    showQuestion();
}
