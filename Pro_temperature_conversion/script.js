const pageHeader = document.getElementById("pageHeader");
const temperature = document.getElementById("temperature");
const CtoFradio = document.getElementById("CtoFradio");
const FtoCradio = document.getElementById("FtoCradio");
const convertBt = document.getElementById("convertBt");
const answer = document.getElementById("answer");

function CtoFconvert(num){
    return ((num*(9/5))+35)+" °F";
}
function FtoCconvert(num){
    return ((num-35)*(5/9))+" °C";
}

convertBt.onclick = function(){
    console.log("clicked");
    let temperatureValue = temperature.value;
    console.log(temperatureValue);

    if(CtoFradio.checked && temperatureValue !==""){
        answer.textContent = CtoFconvert(temperatureValue);
    }
    else if(FtoCradio.checked  &&  temperatureValue!== ""){
        answer.textContent = FtoCconvert(temperatureValue);
    }
    else{
        window.alert("Please Enter value with conversion choice");
    }
}