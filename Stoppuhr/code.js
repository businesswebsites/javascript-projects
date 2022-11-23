var minutes = 00;
var seconds = 00;
var tens = 00;
var outputMinutes = document.getElementById('minutes');
var outputSeconds = document.getElementById('seconds');
var outputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', ()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', ()=>{
    clearInterval(Interval);

});

buttonReset.addEventListener('click', ()=>{
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    outputMinutes.innerHTML = minutes;
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = '0' + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        outputSeconds.innerHTML = '0' + seconds;
        tens = '00';
    }
    if(seconds > 9 && seconds < 60){
        outputSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        seconds = '00';
        outputSeconds.innerHTML = seconds;
        outputMinutes.innerHTML = '0' + minutes;
    }

}


