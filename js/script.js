// stores questions for the selected unit
let currentQuestions = [];

// keeps track of which question we are on
let currentIndex = 0;

// player score
let score = 0;

// starts the quiz when a unit is chosen
function startQuiz(unit) {

    // hide unit info screen
    document.getElementById("unitInfo").style.display = "none";

    // load questions for chosen unit
    currentQuestions = quiz[unit];

    // reset progress
    currentIndex = 0;
    score = 0;

    // hide menu screens
    document.getElementById("units").style.display = "none";
    document.getElementById("choose").style.display = "none";

    // show quiz screen
    document.getElementById("quiz").style.display = "block";
    document.getElementById("backToUnitsButton").style.display = "block";

    // reload page when going back
    document.getElementById("backToUnitsButton").onclick = () => {
        location.reload();
    };

    // show first question
    showQuestion();
}

// displays current question and answers
function showQuestion(){

    // get current question object
    let q = currentQuestions[currentIndex];

    // show question number
    document.getElementById("qNumber").textContent = "Question " + (currentIndex+1) + " / 15";

    // show question text
    document.getElementById("qText").textContent = q.text;

    // put answer choices into buttons
    for(let i=0;i<4;i++){
        document.getElementById("a"+i).textContent = q.choices[i];
    }
}

// connect answer buttons to checkAnswer function
document.getElementById("a0").onclick = () => checkAnswer(0); 
document.getElementById("a1").onclick = () => checkAnswer(1);
document.getElementById("a2").onclick = () => checkAnswer(2);
document.getElementById("a3").onclick = () => checkAnswer(3);

// checks if selected answer is correct
function checkAnswer(choice){

    let q = currentQuestions[currentIndex];

    // if answer is correct
    if(choice == q.answer){
        score++; // increase score

        disableButtons();

        // show correct message
        document.getElementById("correctAnswer").style.display = "block";
        document.getElementById("okButtonDiv").style.display = "block";

        // highlight correct answer
        document.getElementById("a" + q.answer).style.backgroundColor = "lightgreen";

        // go to next question when OK pressed
        document.getElementById("okButton").onclick = () => plusIndex();
    }
    else{
        disableButtons();

        // show wrong message
        document.getElementById("wrongAnswer").style.display = "block";

        // show correct answer text
        document.getElementById("correctAnswers").textContent = q.choices[q.answer];

        document.getElementById("okButtonDiv").style.display = "block";

        // highlight answers
        document.getElementById("a" + q.answer).style.backgroundColor = "lightgreen";
        document.getElementById("a" + choice).style.backgroundColor = "salmon";

        document.getElementById("okButton").onclick = () => plusIndex();
    }
}

// moves to next question
function plusIndex(){

    currentIndex++; // go to next question

    reset();        // reset colors/messages
    enableButtons();// enable buttons again

    // if questions remain
    if(currentIndex < 15){
        showQuestion();
    } else {
        // show results screen
        document.getElementById("quiz").style.display = "none";
        document.getElementById('results').style.display = 'block';
        document.getElementById('score').textContent = score;
        var percentage = Math.round((score / 15) * 100);
        document.getElementById('percentage').textContent = percentage + '%';
    }
}

// shows info page for selected unit
function showUnitInfo(unit){

    document.getElementById("units").style.display = "none";
    document.getElementById("choose").style.display = "none";
    document.getElementById("unitInfo").style.display = "block";

    // display unit name and description
    document.getElementById("unitName").textContent = info[unit].name;
    document.getElementById("unitDescription").textContent = info[unit].description;

    // start quiz button
    document.getElementById("startQuizButton").onclick = () => startQuiz(unit);

    // back button reloads page
    document.getElementById("backButton").onclick = () => {
        location.reload()
    }
}

// resets UI between questions
function reset(){

    // hide messages
    document.getElementById("wrongAnswer").style.display = "none";
    document.getElementById("correctAnswer").style.display = "none";
    document.getElementById("okButtonDiv").style.display = "none";

    // reset button colors
    document.getElementById("a0").style.backgroundColor = "#5588aa";
    document.getElementById("a1").style.backgroundColor = "#5588aa";
    document.getElementById("a2").style.backgroundColor = "#5588aa";
    document.getElementById("a3").style.backgroundColor = "#5588aa";
}

// disables answer buttons
function disableButtons(){
    document.getElementById("a0").disabled = true;
    document.getElementById("a1").disabled = true;
    document.getElementById("a2").disabled = true;
    document.getElementById("a3").disabled = true;
}

// enables answer buttons
function enableButtons(){
    document.getElementById("a0").disabled = false;
    document.getElementById("a1").disabled = false;
    document.getElementById("a2").disabled = false;
    document.getElementById("a3").disabled = false;
}

// video control button (single toggle)
const bgVideo = document.getElementById('bgVideo');
const toggleVideoBtn = document.getElementById('toggleVideoBtn');

if (bgVideo && toggleVideoBtn) {
    function updateVideoButtonLabel() {
        toggleVideoBtn.textContent = bgVideo.paused ? 'Play Video' : 'Pause Video';
    }

    bgVideo.addEventListener('play', updateVideoButtonLabel);
    bgVideo.addEventListener('pause', updateVideoButtonLabel);

    toggleVideoBtn.addEventListener('click', () => {
        if (bgVideo.paused) {
            bgVideo.play().catch(err => console.warn('Autoplay play blocked:', err));
        } else {
            bgVideo.pause();
        }
    });

    updateVideoButtonLabel();
}