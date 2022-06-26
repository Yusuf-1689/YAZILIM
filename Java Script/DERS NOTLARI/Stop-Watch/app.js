const startButton = document.getElementById("startTimer");
const stopButton = document.querySelector("#resetTimer");
let displayTimer = document.querySelector(".timerDisplay");
let intervalId;
let [min,sec,ms] = [0,0,0];

document.querySelector(".container").addEventListener("click", (e) => {
 if(e.target.classList.contains("start")){
  if(startButton.classList.contains("start")){
   startButton.classList.remove("start");
   startButton.innerHTML = `<i class="fa-solid start fa-pause"></i>`
   intervalId = setInterval(timer , 10);
  }
  else {
   startButton.classList.add("start");
   startButton.innerHTML = `<i class="fa-solid start fa-play"></i>`
   clearInterval(intervalId);
  }
 }
 else if (e.target.classList.contains("stp")){
  clearInterval(intervalId);
  startButton.innerHTML = `<i class="fa-solid start fa-play"></i>`
  displayTimer.innerHTML = `00 : 00 : 00`;
  [min,sec,ms] = [0,0,0];
  startButton.classList.add("start");
 }
});

function timer(){
 ms += 1;
 if (ms == 100){
  sec += 1;
  ms = 0;
 }
 if(sec == 60){
  min += 1;
  sec = 0;
 }
 if(min == 60){
  min = 0;
 }
 let msS = ms<10 ? "0"+ms : ms;
 let secS = sec<10 ? "0"+sec : sec;
 let minS = min<10 ? "0"+min : min;
 displayTimer.innerHTML = `${minS} : ${secS} : ${msS}`;
}