

const questionList=[
    new Question("Which of the following is the computer hardware used for video calling over the Internet?",{a:"Scanner",b:"Webcam",c:"Printer",d:"Screen"},"b"),
    new Question("What is the name given to the hand-held and visible parts of the computer?",{a:"Equipment",b:"System Software",c:"Application Software",d:"Equipment"},"a"),
    new Question("Which of the following software is the system software?",{a:"Google Chrome",b:"Paint",c:"Avira Antivirus",d:"Windows 8",e:"python"},"d"),
    new Question("What is the internal hardware unit where all the operations on the computer are performed?",{a:"Motherboard",b:"Ram",c:"Processor",d:"Hard Drive",e:"google"},"c"),
    new Question("Which of the following is the internal hardware unit?",{a:"Safety box",b:"Motherboard",c:"Screen",d:"Scanner",e:"Mouse"},"b")
    // ....... add question 
];




const quiz = new Quiz(questionList);
const ui = new UI();

ui.startBtn.addEventListener("click",startQuiz);
ui.btnNext.addEventListener("click",nextButton);
ui.replay.addEventListener("click",restartQuiz);
ui.quit.addEventListener("click",exitQuiz);

function startQuiz(e){
    Timer(10);
    Timerline();
    e.preventDefault();
    ui.startBtn.classList.remove("active");
    ui.quizBox.classList.add("active");
    ui.seeQuestion(quiz.getQuestion());
    ui.seeQuestionNumber(quiz.questionIndex+1,quiz.question.length);
    ui.btnNext.classList.remove("show");
}

// SORU GEÇME BUTONU --start
function nextButton(e){
    e.preventDefault();
    if(quiz.question.length != quiz.questionIndex){
        Timer(10);
        Timerline();
        console.log("soru indexi: ",quiz.questionIndex);
        ui.seeQuestion(quiz.getQuestion());
        ui.seeQuestionNumber(quiz.questionIndex+1,quiz.question.length);
        ui.btnNext.classList.remove("show");
    }
    else{
        console.log("Quiz finished");
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active");
        ui.seeScore(quiz.correctAnswerNumber,quiz.question.length);
    }

}


function optionSelected(e){
    // stop time
    clearInterval(counter);
    clearInterval(counterLine);
    let selectedElement=e.target;
    console.log(selectedElement);
    if(selectedElement.nodeName == "SPAN"){
        selectedElement=selectedElement.parentElement;
    }
    const ans=e.target.textContent[0];
    console.log(ans);
    const ques=quiz.getQuestion();

    if(ques.answerCheck(ans)){
        quiz.correctAnswerNumber += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend",ui.inCorrectIcon);
    }
    quiz.questionIndex += 1;
    ui.disableAllOption();
    ui.btnNext.classList.add("show");
}


let counter;
function Timer(time){
    // 1 second 1000 millisecond
    counter=setInterval(tm,1000);
    function tm(){
        ui.timeSecond.textContent=time;
        time--;
        if(time<0){
            clearInterval(counter);
            ui.timeText.textContent="Time Finished";

            ui.disableAllOption();
            quiz.questionIndex += 1;

            ui.btnNext.classList.add("show");
        }
    }
}

let counterLine;
function Timerline(){
    let line_width=550;
    counterLine=setInterval(tm,1000);
    function tm(){
        line_width-=550/10;
        ui.timeLine.style.width=line_width+"px";
        if(line_width>549){
            clearInterval(counterLine);
        }
    }
}

function restartQuiz(){
    quiz.correctAnswerNumber=0;
    quiz.questionIndex=0;
    ui.startBtn.click();
    ui.scoreBox.classList.remove("active");
}

function exitQuiz(){
    window.location.reload();
}
