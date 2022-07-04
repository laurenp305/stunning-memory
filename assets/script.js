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
}


