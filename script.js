let score = 0;
let time = 30;
let timerRunning = true;

const scoreSpan = document.getElementById("score");
const timeSpan = document.getElementById("time");
const button = document.getElementById("pointButton");

// كل ما تضغط الزر تزيد النقاط
button.onclick = function() {
  if(timerRunning) {
    score++;
    scoreSpan.textContent = score;
  }
};

// عداد الوقت
const timer = setInterval(function() {
  if(time > 0) {
    time--;
    timeSpan.textContent = time;
  } else {
    timerRunning = false;
    clearInterval(timer);
    alert("انتهى الوقت! نقاطك: " + score);
  }
}, 1000);
