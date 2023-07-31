let display = document.querySelector('.display');
let start = document.querySelector('.startbtn');
let stop = document.querySelector('.stopbtn');
let reset = document.querySelector('.resetbtn')
let hour = 0;
let minute = 0;
let second = 0;

let interval;


start.addEventListener('click',begin);
stop.addEventListener('click',halt);
reset.addEventListener('click',restart)

function timer(){
    second++
        if (second === 60){
            second = 0;
            minute++;
                if(minute === 60){
                    minute = 0;
                    hour++;
                }
     }
     let hr = hour < 10 ? "0" + hour : hour;
     let min = minute < 10 ? "0" + minute : minute;
     let sec = second < 10 ? "0" + second : second;

       display.innerHTML = `${hr} : ${min} : ${sec}`; 
    
}

function begin(){
    interval = setInterval(timer, 1000);
}
function halt(){
    clearInterval(interval);
}
function restart(){
    clearInterval(interval);
    display.innerHTML = "00: 00 : 00"
    hour = 0;
    minute = 0;
    second = 0;
}