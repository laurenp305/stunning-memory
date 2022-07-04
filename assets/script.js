// getting all required elements
const start_button = document.querySelector(".start_button");
const info_box = document.querySelector(".info_box");
const exit_button = info_box.querySelector(".buttons .quit");
const continue_button = info_box.querySelector(".buttons .restart");
const quiz_button = document.querySelector(".quiz_box");

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
    showQuestions(0);
}

let que_count = 0;

//getting questions and options from array in other js sheet
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                    + '<div class="option"><span></span></div>';
                    + '<div class="option"><span></span></div>';
                    + '<div class="option"><span></span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
}

