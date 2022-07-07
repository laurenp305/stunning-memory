// getting all required elements
const start_button = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_button = info_box.querySelector(".buttons .quit");
const continue_button = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

//if Start Quiz Button Clicked
start_button.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//if Exit Button Clicked
exit_button.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//if Continue Button Clicked
continue_button.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.add("activeQuiz");//show the quiz box
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let que_count = 0;
let que_numb = 1;
let timeValue =  15;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const next_button = quiz_box.querySelector(".next_button");

//If next button is clicked
next_button.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    }else{
        console.log("Questions completed");
    }
}

//getting questions and options from array 
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>';
                    + '<div class="option">+ questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">+ questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}


function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns = correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct");
    }else{
        console.log("Answer is wrong")
    }
}


function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + que_count + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag; 
}


