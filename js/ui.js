




function UI(){
    //this.quiz_box=document.querySelector("#quiz-box");
    this.body=document.querySelector("#quiz-box #body");

    // for button select
    this.correctIcon = '<i class="fa-regular fa-circle-check"></i>';
    this.inCorrectIcon = '<i class="fa-regular fa-circle-xmark"></i>';
    // for start quiz
    this.startBtn=document.querySelector("#button-box");
    // for next question
    this.btnNext=document.getElementById("next-btn");
    // for time
    this.timeText=document.querySelector(".time-text");         //remaining time description
    this.timeSecond=document.querySelector(".time-second");     //second description

    this.quizBox=document.querySelector("#quiz-box");
    this.scoreBox=document.querySelector("#score-box");

    this.timeLine=document.querySelector(".time-line");


    // score section buttons
    this.replay=document.getElementById("replay");
    this.quit=document.getElementById("quit");

}

// soru oluşturur ve cardbody ekler.
UI.prototype.seeQuestion=function(ques){
    // body içini tamamen boşaltma
    this.body.innerHTML="";

    // cardbody element
    const cardBody=document.createElement("div");
    cardBody.classList.add("card-body");

    // soru elementi
    const title=document.createElement("h5");
    title.classList.add("question-title");
    title.textContent=ques.question;  // sorunun eklendiği bölüm

    // soru cevapları elementleri
    const answers=document.createElement("div");
    answers.classList.add("option-list");

    for(let [key,value] of Object.entries(ques.Answers)){
        const option=document.createElement("div");
        option.classList.add("option");
        option.addEventListener("click",optionSelected); // button select

        const span=document.createElement("span");
        span.textContent= key + ") " + value;  // sorunun cevaplarının eklendiği bölüm

        //span option ekleme
        option.appendChild(span);
        //option answers ekleme
        answers.appendChild(option);
    }
    // title cardbody ekleme
    cardBody.appendChild(title);
    // answers cardBody ekleme
    cardBody.appendChild(answers);
    // cardBody body bölümüne ekleme
    this.body.appendChild(cardBody);
};

// add "disabled" answer section 
UI.prototype.disableAllOption=function(){
    const options = document.querySelectorAll(".option");
    for(let option of options){
        option.classList.add("disabled");
    }
}

// this function is see question number and current question number
UI.prototype.seeQuestionNumber=function(questionIndex,Total){
    const ticket=`<span class="badge text-bg-danger">${questionIndex} / ${Total}</span>`;
    document.querySelector(".question-index").innerHTML=ticket;
;}

// score bilgisini verir.
UI.prototype.seeScore=function(correctAnswer,Total){
    const point=parseInt((correctAnswer/Total)*100);
    console.log(point);
    const ticket1=`After all, you answered ${correctAnswer} correct answers in ${Total} questions.`;
    const ticket2=`Total score point: ${point}`;
    document.querySelector(".score-text").innerHTML=ticket1; 
    document.querySelector(".point-text").innerHTML=ticket2;
}



//------- id=dody ----------
/*
<div class="card-body">
    <h5 class="question-title">question region</h5>
    <div class="option-list">
        <div class="option">
            <span>a: python</span>
        </div>
        <div class="option">
            <span>b: python</span>
        </div>
        <div class="option">
            <span>c: python</span>
        </div>
        <div class="option">
            <span>d: python</span>
        </div>
    </div>
</div>   
 */




