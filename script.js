let seconds = document.querySelector('#seconds');
let minutes = document.querySelector('#minutes');
let hours = document.querySelector('#hours');

let stopBtn = document.querySelector('.buttons img:nth-child(1)');
let startBtn = document.querySelector('.buttons img:nth-child(2)');
let resetBtn = document.querySelector('.buttons img:nth-child(3)');

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

var interval;

function startTime(){
    interval = setInterval(function(){
        secondsCount += 1;
        if (secondsCount < 10){
            seconds.innerText = "0" + secondsCount;
        }
        else{
            seconds.innerText = secondsCount;
        }

        if (minutesCount < 10){
            minutes.innerText = "0" + minutesCount;
        }else{
            minutes.innerText = minutesCount;
        }

        if (hoursCount < 10){
            hours.innerText = "0" + hoursCount;
        }else{
            hours.innerText = hoursCount;
        }

        if (secondsCount == 60){
            secondsCount = 0;
            minutesCount += 1;
        }

        if (minutesCount == 60){
            minutesCount = 0;
            hoursCount += 1;
        }
    }, 1000);
    
}

function stopTime(){
    if (started){
        clearInterval(interval);
        started = false;
    }
}

function resetTime(){
    clearInterval(interval);
    secondsCount = 0;
    minutesCount = 0;
    hoursCount = 0;
    seconds.innerText = "0" + secondsCount;
    minutes.innerText = "0" + minutesCount;
    hours.innerText = "0" + hoursCount;
}

let started = false;

startBtn.addEventListener('click', function(){
    if (!started){
        startTime();
        started = true;
    }
});

stopBtn.addEventListener('click', function(){
    if (started){
        stopTime();
        started = false;
    }
});

resetBtn.addEventListener('click', function(){
    resetTime();
    started = false;
})

