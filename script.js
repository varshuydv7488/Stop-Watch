let hour=0;
let min=0
let sec=0

let timer;

let running=false

function updateDisplay(){
    let h=hour<10 ? "0"+hour :hour
    let m=min<10 ? "0"+min :min
    let s=sec<10 ? "0"+sec :sec

    document.querySelector("#display").innerHTML=h+":"+m +":"+s
}
function startTimer(){
    if(running==false){
        running=true
    }
    timer=setInterval(()=>{
    if(sec==60){
        min++
        sec=0
    } 
    if(min==60){
        hour++
        min=0
    }
    updateDisplay()
    sec++
    },10)
}
function stopTime(){
    if(running==true){
        running=false
        clearInterval(timer)
    }
}
function resetTime(){
    if(running==true){
        clearInterval(timer)
        running=false
    }
    hour=0
    min=0
    sec=0
    updateDisplay()
}

