let computerNum = 0;
let playBtn = document.getElementById("play-btn");
let userNum = document.getElementById("user-num");
let resultArea = document.getElementById("result-area");

playBtn.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userNum.value;
  if (userValue < computerNum) {
    resultArea.textContent = "Up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "정답 😈";
  }
}

pickRandomNum();
