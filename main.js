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
  console.log("정답", computerNum);
}

function play() {
  let userValue = userNum.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이 숫자만 입력바람.";
    return;
  }

  if (userHistory.includes(userValue)) {
    resultArea.textContent = "이미 입력한 값입니다.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 :${chances}`;
  console.log(chances);

  if (userValue < computerNum) {
    resultArea.textContent = "Up";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down";
  } else {
    resultArea.textContent = "정답입니다 🥳";
    gameOver = true;
  }

  userHistory.push(userValue);
  console.log(userHistory);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playBtn.disabled = true;
  }
}

function reset() {
  userNum.value = "";
  pickRandomNum();
  resultArea.textContent = "결과는 ?";
  userHistory = [];
  chances = 5;
  chanceArea.textContent = "남은 기회 : 5";
}

pickRandomNum();
