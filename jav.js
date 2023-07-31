let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let tens = document.querySelector('.tens');
let buttons = document.querySelectorAll('button');

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;


function updateTime(){
    elapsedTime = Date.now() - startTime;
    hour.innerHTML = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    minute.innerHTML = Math.floor((elapsedTime / (1000 * 60) ) % 60);
    second.innerHTML = Math.floor((elapsedTime / 1000 ) % 60);
    tens.innerHTML = Math.floor((elapsedTime / 10) % 100);
    if (hour.innerHTML < 10 ){
      hour.innerHTML = "0" + hour.innerHTML;
    } else {
        hour.innerHTML = hour.innerHTML;
    }
    if (minute.innerHTML < 10 ){
        minute.innerHTML = "0" + minute.innerHTML;
      } else {
          minute.innerHTML = minute.innerHTML;
      }
      if (second.innerHTML < 10 ){
        second.innerHTML = "0" + second.innerHTML;
      } else {
          second.innerHTML = second.innerHTML;
      }
// console.log(Date.now(),startTime,elapsedTime)   
}

function buttonClick(event){
    if (event ==='START'){
        start(event);
    } else if (event === 'PAUSE'){
        pause(event);
    } else {
        reset(event);
    }

}

function start(event){
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100);
    }
//    console.log(startTime, Date.now(),elapsedTime)
}

function pause(event){
    if (!paused){
        paused = true;
        startTime = Date.now() - elapsedTime;
        clearInterval(intervalId);
    }
//    console.log(startTime, Date.now(),elapsedTime)
}

function reset(event){
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';
    tens.innerHTML = '00';
}

buttons.forEach(button => button.addEventListener('click', function(event){buttonClick(event.target.innerText)}));