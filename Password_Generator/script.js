//random password generator
function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=|<>";

    let allowedChars="";
    let password = "";

    if(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSymbols){
        return false;
    }
    allowedChars += includeLowerCase ? lowerChars : "";
    allowedChars += includeUpperCase ? upperChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0 ){
        return "Password length must be at least one";
    }
    if(allowedChars.length === 0){
        return `At least one set of characters needs to be selected`;
    }

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

//update range value
function updateValue(value) {
    document.getElementById('rangeValue').innerText = value;
}

const password = document.getElementById("password");
const generateBt = document.getElementById("generateBt");

generateBt.onclick = function(){

    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeNumbers= document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const passwordLength = document.getElementById("passwordLength").value;
    
    let generatedPassword=generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
    if(!generatedPassword){
        alert("You must enter at least on option!");
    }
    else{
        password.value = generatedPassword;
    }
}

updateValue(12);
