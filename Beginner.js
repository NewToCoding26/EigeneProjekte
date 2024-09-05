 // Questions for Beginner level
 const questions = [
    { question: "Who is the protagonist of JoJo's Bizarre Adventure Part 1?", correctAnswer: "b", options: { a: "Joseph Joestar", b: "Jonathan Joestar", c: "Jotaro Kujo", d: "Giorno Giovanna" } },
    { question: "What is the name of Jotaro Kujo's Stand in Part 3, Stardust Crusaders?", correctAnswer: "c", options: { a: "Crazy Diamond", b: "The World", c: "Star Platinum", d: "Silver Chariot" } },
    { question: "Which of these objects does Dio wear on his head during Part 1?", correctAnswer: "a", options: { a: "A crown", b: "A hat", c: "A mask", d: "A bandana" } },
    { question: "What is the name of Joseph Joestar’s Stand in Part 2 and Part 3?", correctAnswer: "a", options: { a: "Hermit Purple", b: "The Fool", c: "Magician's Red", d: "Silver Chariot" } },
    { question: "What country do Jotaro and his friends travel to in order to defeat Dio in Stardust Crusaders?", correctAnswer: "c", options: { a: "Japan", b: "Italy", c: "Egypt", d: "America" } }
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

// Function to show the final score and end screen
function endQuiz() {
    // Hide the question and options
    document.getElementById('question').style.display = 'none';
    document.getElementById('options').style.display = 'none';
    
    // Create an end message with the score
    const endMessage = document.createElement('h2');
    endMessage.textContent = 'Quiz Over!';
    document.getElementById('quiz-container').appendChild(endMessage);
    
    const scoreMessage = document.createElement('p');
    scoreMessage.textContent = `Your score is: ${score} / ${totalQuestions}`;
    document.getElementById('quiz-container').appendChild(scoreMessage);
    
    // Hide the "Next" button if necessary
    document.getElementById('next-btn').style.display = 'none';
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