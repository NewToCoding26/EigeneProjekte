// Questions for Beginner level - moved outside the event listener
const questions = [
    { question: "Who is the protagonist of JoJo's Bizarre Adventure Part 1?", correctAnswer: "b", options: { a: "Joseph Joestar", b: "Jonathan Joestar", c: "Jotaro Kujo", d: "Giorno Giovanna" } },
    { question: "What is the name of Jotaro Kujo's Stand in Part 3, Stardust Crusaders?", correctAnswer: "c", options: { a: "Crazy Diamond", b: "The World", c: "Star Platinum", d: "Silver Chariot" } },
    { question: "Which of these objects does Dio wear on his head during Part 1?", correctAnswer: "a", options: { a: "A crown", b: "A hat", c: "A mask", d: "A bandana" } },
    { question: "What is the name of Joseph Joestar’s Stand in Part 2 and Part 3?", correctAnswer: "a", options: { a: "Hermit Purple", b: "The Fool", c: "Magician's Red", d: "Silver Chariot" } },
    { question: "What country do Jotaro and his friends travel to in order to defeat Dio in Stardust Crusaders?", correctAnswer: "c", options: { a: "Japan", b: "Italy", c: "Egypt", d: "America" } }
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = questions.length;

document.addEventListener("DOMContentLoaded", function() {
    function showQuestion() {
        if (currentQuestionIndex < totalQuestions) {
            const questionData = questions[currentQuestionIndex];
            document.getElementById('question').textContent = questionData.question;
            document.querySelector('button[onclick="answerQuestion(\'a\')"]').textContent = questionData.options.a;
            document.querySelector('button[onclick="answerQuestion(\'b\')"]').textContent = questionData.options.b;
            document.querySelector('button[onclick="answerQuestion(\'c\')"]').textContent = questionData.options.c;
            document.querySelector('button[onclick="answerQuestion(\'d\')"]').textContent = questionData.options.d;
        } else {
            // End of the quiz, show score and hide buttons
            document.getElementById('question').textContent = "Quiz Over!";
            const buttons = document.getElementsByClassName('btn');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.display = 'none';  // Hide all buttons
            }

            // Show the score
            const scoreMessage = document.createElement('p');
            scoreMessage.textContent = `Your score is: ${score} / ${totalQuestions}`;
            document.getElementById('quiz-section').appendChild(scoreMessage);
        }
    }

    // Show the first question when the page loads
    showQuestion();
});

// Keep answerQuestion outside the event listener
function answerQuestion(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }
    currentQuestionIndex++;
    showQuestion();  // Move to the next question
}
