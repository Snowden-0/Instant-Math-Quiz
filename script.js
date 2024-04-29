let num1 = 0;
let num2 = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let operator = '';

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operator = document.querySelector('input[name="operator"]:checked').value;
    document.getElementById('question').innerText = `What is ${num1} ${operator} ${num2}?`;
    document.getElementById('counter').innerText = `${totalQuestions + 1}.`;
    document.getElementById('questionCounter').innerText = `${totalQuestions + 1}/10`;
}

function checkAnswer() {
    if (totalQuestions < 10) {
        let userAnswer = parseInt(document.getElementById('answer').value);
        let correctAnswer = eval(`${num1} ${operator} ${num2}`);
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
        totalQuestions++;
        document.getElementById('answer').value = '';
        if (totalQuestions < 10) {
            generateQuestion();
        } else {
            showResult();
        }
    }
}

function startQuiz() {
    document.getElementById('operation').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    generateQuestion();
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('finalScore').innerText = `You scored ${correctAnswers * 10}%.`;
    document.getElementById('correctOutOf').innerText = `You got ${correctAnswers} out of 10 correct.`;
}

function exitQuiz() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('thankYou').style.display = 'block';
}

function resetQuiz() {
    correctAnswers = 0;
    totalQuestions = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('thankYou').style.display = 'none';
    document.getElementById('operation').style.display = 'block';
}
