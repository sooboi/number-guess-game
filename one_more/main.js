let computerNum = 0;
let playBtn = document.getElementById("play-btn");
let userNum = document.getElementById("user-num");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-btn");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let userHistory = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userNum.addEventListener("focus", function () {
  userNum.value = "";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("답:", computerNum);
}

function play() {
  let userValue = userNum.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자입력";
    return;
  }

  if (userHistory.includes(userValue)) {
    resultArea.textContent = "이미 입력한 값";
    return;
  }

  chances--;
  chanceArea.textContent = `기회 :${chances}`;

  if (userValue < computerNum) {
    resultArea.textContent = "업";
  } else if (userValue > computerNum) {
    resultArea.textContent = "다운";
  } else {
    resultArea.textContent = "정답";
    gameOver = true;
  }

  userHistory.push(userValue);
  console.log(userHistory);

  if (chances < 1 && userValue !== computerNum) {
    gameOver = true;
    resultArea.textContent = "실패";
  }

  if (gameOver == true) {
    playBtn.disabled = true;
  }
}

function reset() {
  gameOver = false;
  pickRandomNum();
  userHistory = [];
  chances = 5;
  chanceArea.textContent = "기회 : 5";
  resultArea.textContent = "결과창";
  userNum.value = "";
  playBtn.disabled = false;
}

pickRandomNum();
