let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const date = new Date(time);

  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');

  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 10);
  }
}

function pauseStopwatch() {
  if (timerInterval) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    timerInterval = null;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!timerInterval) return;
  const lapTime = document.getElementById('display').textContent;
  const lapList = document.getElementById('laps');
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap: ${lapTime}`;
  lapList.appendChild(lapItem);
}
