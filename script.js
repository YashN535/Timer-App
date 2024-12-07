const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  timerDisplay.textContent = formattedTime;
}

startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerDisplay.textContent = "00:00:00";
});
