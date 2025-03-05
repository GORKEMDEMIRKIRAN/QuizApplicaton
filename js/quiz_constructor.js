


// QUIZ APPLICATION

function Quiz(question){
    this.questionIndex=0;
    this.correctAnswerNumber=0;
    this.question=question;
}
Quiz.prototype.getQuestion=function(){
    return this.question[this.questionIndex];
}