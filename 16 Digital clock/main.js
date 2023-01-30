const timePara = document.querySelector("#time");

let hr = 23;
let min = 59; 
let sec = 50;

function startTime() {
    if (sec < 59) {
        sec++;
    } else {
        sec = 0;
        if (min < 59) {
            min++;
        } else {
            min = 0;
            if (hr < 23) {
                hr++;
            } else {
                hr = 0;
            }
        }
    }
    let hrStr = hr < 10 ? `0${hr}` : hr;
    let minStr = min < 10 ? `0${min}` : min;
    let secStr = sec < 10 ? `0${sec}` : sec;

    if (hr < 12) {
        // this is AM
        timePara.textContent = `${hrStr}:${minStr}:${secStr} AM`;
    } else {
        // this is PM
        timePara.textContent = `${hrStr}:${minStr}:${secStr} PM`;
    }

    setTimeout(startTime, 1000);
}

startTime();
