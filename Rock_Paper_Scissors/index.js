const computerChoices = ['Rock',"Paper","Scissors"];
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resultD = document.getElementById("result");

let Pscore = 0;
let Cscore = 0;

function playGame(playerChoice){
    const computerChoice = computerChoices[Math.floor(Math.random()*3)];

    console.log(playerChoice);
    playerChoiceDisplay.textContent=`Player:${playerChoice}`;
    console.log(computerChoice);
    computerChoiceDisplay.textContent=`Computer:${computerChoice}`;

    let result = "";

    if(playerChoice === computerChoice){
        result = "its a tie";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice==="Scissors")?"you win":"you lost";
                break;
            case "Paper":
                result = (computerChoice==="Rock")?"you win":"you lost";
                break;
            case "Scissors":
                result = (computerChoice==="Paper")?"you win":"you lost";
                break;
        }
        
    }
    resultD.textContent=result;
    resultD.classList.remove("greenText","redText");

    switch(result){
        case "you win":
            resultD.classList.add("greenText");
            Pscore++;
            playerScore.textContent=Pscore;
            break;
        case "you lost":
            resultD.classList.add("redText");
            Cscore++;
            computerScore.textContent=Cscore;
            break;
    }
}