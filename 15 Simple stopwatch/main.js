const timePara = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const flagBtn = document.querySelector("#flag");
const flagList = document.querySelector(".flag-list");
let intervalId;

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(starting, 0);
  }
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  timePara.textContent = "00:00";
  flagList.innerHTML = "";
}

function starting() {
  let timeArr = timePara.textContent.split(":");
  timeArr = timeArr.map((str) => Number(str));
  
  if (timeArr[1] < 60) {
    timeArr[1]++;
  } else {
    timeArr[0]++;
    timeArr[1] = 0;
  }
  // converting to string and then appending 0 in front if it one digit number;
  if (timeArr[0] < 10) {
    timeArr[0] = `0${String(timeArr[0])}`;
  } else {
    timeArr[0] = String(timeArr[0]);
  }
  // same with the second item
  
  if (timeArr[1] < 10) {
    timeArr[1] = `0${String(timeArr[1])}`;
  } else {
    timeArr[1] = String(timeArr[1]);
  }
  timePara.textContent = timeArr.join(":");
}

function addFlag() {
  if (!(timePara.textContent === "00:00")) {
    const flagItem = document.createElement("li");
    flagItem.textContent = timePara.textContent;
    flagList.appendChild(flagItem);
  }
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
flagBtn.addEventListener("click", addFlag);