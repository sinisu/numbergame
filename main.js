let computerNum=0;
let playButton = document.getElementById("play-button")
let userNum = document.getElementById("user-num")
let resultArea = document.getElementById("show-result")

playButton.addEventListener("click", play)

function pickRandomNum(){
    computerNum=Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}

function play(){
    let userValue = userNum.value
    if(computerNum>userValue){
        resultArea.textContent="UP"
    } else if(computerNum<userValue){
        resultArea.textContent="DOWN"
    } else{
        resultArea.textContent="SUCCESS"
    }
}

pickRandomNum()