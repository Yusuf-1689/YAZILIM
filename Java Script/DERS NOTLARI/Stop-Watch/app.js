
const startButton = document.getElementById("startTimer");
const stopButton = document.querySelector("#resetTimer");
let displayTimer = document.querySelector(".timerdisplay");
let intervalId;
let [ms,sec,min] = [0,0,0];
// console.log(startButton,startButton,displayTimer);

document.querySelector(".container").addEventListener("click", (e) =>{
    if(e.target.classList.contains("start")){
        if(startButton.classList.contains("start")){
            startButton.classList.remove("start");
            startButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
            intervalId = setInterval(timer , 10);
        }
        else{
            startButton.classList.add("start");
            startButton.innerHTML = `<i class="fa-solid start fa-play"></i>`
            clearInterval(intervalId);
        }
    }
    else if(e.target.classList.contains("stp")){
        clearInterval(intervalId);
        startButton.innerHTML = `<i class="fa-solid start fa-play"></i>`

    }

});

function timer() {
    ms += 1;
    if(ms == 100){
        sec +=1;
        ms = 0;
    }
    if(sec == 60){
        min +=1;
        sec = 0;
    }
    if(min == 60){
        min = 0;
    }
    let msS = ms<10 ? "0"+ms : ms;
    let secS = sec<10 ? "0"+sec : sec;
    let minS = min<10 ? "0"+min : min;
    displayTimer.innerHTML = `${minS} : ${secS} : ${msS}`;
    // console.log(`${minS} : ${secS} : ${msS}`);
}







