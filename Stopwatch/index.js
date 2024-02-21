const display =document.getElementById("time");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
    console.log(startTime);
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime=0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime/(1000*60*60));
    hours  = hours.toString().padStart(2,0);

    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    minutes = minutes.toString().padStart(2,0);

    let secondes = Math.floor(elapsedTime/(1000)%60);
    secondes = secondes.toString().padStart(2,0);

    let millisecondes = Math.floor(elapsedTime%1000 / 10);
    millisecondes = millisecondes.toString().padStart(2,0);


    display.textContent = `${hours}:${minutes}:${secondes}:${millisecondes}`;

}