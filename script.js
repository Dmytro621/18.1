let timeDisplay = document.getElementById('time');
let startButton = document.querySelector('.start');
let interval = null;
let setTime = prompt('Введите время в секундах')

let timeRemaining = setTime;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${padZero(minutes)}:${padZero(sec)}`;
}

function padZero(num) {
    return num.toString().padStart(2, '0');
}

function updateTime() {
    timeDisplay.innerHTML = formatTime(timeRemaining);
    
    if (timeRemaining <= 0) {
        clearInterval(interval);
        timeDisplay.innerHTML = 'Час вичерпано';
    } else {
        timeRemaining--;
    }
}

startButton.addEventListener('click', () => {
    if (interval) return;

    interval = setInterval(updateTime, 1000);
    updateTime();
});
