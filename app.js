var hours = 0;
var minutes = 0;
var seconds = 0;
var intervalId = null;
var display = document.getElementById('display');

var startTimer = () => {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    // Update the display with formatted time
    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
  document.getElementById('start').disabled = true;
  document.getElementById('stop').disabled = false;
  document.getElementById('stop').classList.add('active');
};

var stopTimer = () => {
  clearInterval(intervalId);
  intervalId = null;
  document.getElementById('start').disabled = false;
  document.getElementById('stop').disabled = true;
  document.getElementById('stop').classList.remove('active');
};

var resetTimer = () => {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.textContent = '00:00:00';
};

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
