function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Question prototyping

Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

//Quiz Consructor

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

//Quiz getQuestion
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

//Quiz isFinish

Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;
}

//Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer) ){
        this.score++;
    }

    this.questionIndex++;


}

var q1 = new Question("What is the best programming language",["C#",'JS','Python','Java'],'JS');
var q2 = new Question("What is the most popular programming language",["C#",'JS','NodeJS','Java'],'JS');
var q3 = new Question("What is the most modern programming language",["C#",'Go','JS','Java'],'JS');

var questions = [q1,q2,q3];

//Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();

    }
    else{

        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').textContent = question.text;

        //Inputing choices into buttons
        for(var i=0; i< choices.length;i++){
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];

            guess('btn' +i, choices[i] );
        }

        showProgress();

    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }

}

function showScore(){
    var html_used = `<h2> Score </h2> <h4> ${quiz.score} </h4>`;
    document.querySelector('.card-body').innerHTML = html_used;
}

function showProgress(){
    var totalquestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + ' of ' + totalquestion;
}