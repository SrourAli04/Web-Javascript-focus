
function roll(){
    console.log("clicked");

    const diceNum = document.getElementById("diceNum").value;
    const dices = document.getElementById("dices");
    const values = [];
    const images = [];
    
    for (let i = 0;i<diceNum ;i++){
        if(diceNum>6){
            window.alert("Value cannot be greater than 6");
            break;
        }
        const value = Math.floor((Math.random()*6)+1);
        values.push(value);
        images.push(`<img src="images/dice-${value}.png" alt="dice ${value}">`);
    }
    
    dices.innerHTML = images.join("");
    console.log("finished");
}




