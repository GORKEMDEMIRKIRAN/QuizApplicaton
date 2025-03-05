

// QUESTION CONSTRUCTOR



function Question(question,Answers,CorrectAnswer) {
    this.question=question;
    this.Answers=Answers;
    this.CorrectAnswer=CorrectAnswer;
};

Question.prototype.answerCheck=function(ans){
    return ans === this.CorrectAnswer;
};