let currentQuestions = [];
let currentIndex = 0;
let score = 0;
function startQuiz(unit) {
    currentQuestions = quiz[unit];
    currentIndex = 0;
    score = 0;
    document.getElementById("units").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}
function showQuestion(){
    let q = currentQuestions[currentIndex];
     document.getElementById("qNumber").textContent = "Question " + (currentIndex+1) + " / 15";
     document.getElementById("qText").textContent = q.text;
    for(let i=0;i<4;i++){
        document.getElementById("a"+i).textContent = q.choices[i];
    }

}
document.getElementById("a0").onclick = () => checkAnswer(0); 
document.getElementById("a1").onclick = () => checkAnswer(1);
document.getElementById("a2").onclick = () => checkAnswer(2);
document.getElementById("a3").onclick = () => checkAnswer(3);
function checkAnswer(choice){
    let q = currentQuestions[currentIndex];
    if(choice === q.answer){
        score++;
    }
    currentIndex++;
    if(currentIndex < 15){
        showQuestion();
    } else {
        alert("Quiz finished! Score: " + score + "/15");
    }

}
