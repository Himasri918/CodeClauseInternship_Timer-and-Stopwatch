var countdown;
var totalSeconds;
var remainingSeconds;
var isPaused = false;

function startTimer() {
    if (isPaused) {
        isPaused = false;
        countdown = setInterval(updateTimer, 1000);
        document.getElementById("startBtn").textContent = "start";
        return;
    }

    var hoursInput= document.getElementById("hours");
    var minutesInput = document.getElementById("minutes");
    var secondsInput = document.getElementById("seconds");
    var display = document.getElementById("display");

    var hours = parseInt(hoursInput.value) || 0;
    var minutes = parseInt(minutesInput.value) || 0;
    var seconds = parseInt(secondsInput.value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    remainingSeconds = totalSeconds;

    countdown = setInterval (updateTimer, 1000);

    disableButtons(false);
}

function updateTimer() {
    var display = document.getElementById("display");

    var hours = Math.floor(remainingSeconds / 3600);
    var minutes = Math.floor((remainingSeconds % 3600) / 60);
    var seconds = remainingSeconds % 60;

    display.textContent = fornatTime(hours) + ":" + fornatTime(minutes) + ":" + fornatTime(seconds);

    if (remainingSeconds <= 0) {
        clearInterval(countdown);
        display.textContent = "Countdown Finished!";
        disableButtons(false);
        document.getElementById("startBtn").textContent = "start";
    } else {
      remainingSeconds--;
    }
}

function pauseTimer() {
    clearInterval(countdown);
    isPaused = true;
    document.getElementById("startBtn").textContent = "Resume";
}

function resetTimer() {
    clearInterval (countdown);
    isPaused = false;
    document.getElementById("hours").value= "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("display").textContent = "";
    document.getElementById("startBtn").textContent = "Start";
    disableButtons (false);
}

function fornatTime(time) {
    return time < 10 ? "0" + time : time;
}

function disableButtons(disabled) {
    document.getElementById("pauseBtn").disabled = disabled;
    document.getElementById("resetBtn").disabled = disabled;
}