const number = document.getElementById("myNumber");
const Dec = document.getElementById("DecBt");
const  Inc = document.getElementById("IncBt");
const reset = document.getElementById("reset");
let count=0

Dec.onclick = function(){
    count--;
    number.textContent = count;
}

Inc.onclick = function(){
    count++;
    number.textContent = count;
}

reset.onclick = function(){
    count=0;
    number.textContent=count;
}
