 // Questions for Beginner level
 const questions = [
    { question: "What is 2 + 2?", correctAnswer: "a", options: { a: "4", b: "3", c: "5", d: "6" } },
    { question: "What is the color of the sky?", correctAnswer: "b", options: { a: "Green", b: "Blue", c: "Red", d: "Yellow" } }
];

let currentQuestionIndex = 0;

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;
        document.querySelector('button[onclick="answerQuestion(\'a\')"]').textContent = questionData.options.a;
        document.querySelector('button[onclick="answerQuestion(\'b\')"]').textContent = questionData.options.b;
        document.querySelector('button[onclick="answerQuestion(\'c\')"]').textContent = questionData.options.c;
        document.querySelector('button[onclick="answerQuestion(\'d\')"]').textContent = questionData.options.d;
    } else {
        document.getElementById('question').textContent = "Quiz Over!";
    }
}

function answerQuestion(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }
    currentQuestionIndex++;
    showQuestion();
}

// Show the first question when the page loads
showQuestion();