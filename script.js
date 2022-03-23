//assign variables
let lowerCaseValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialValue = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ':', ';', '`', '~', '<', ',', '>', '.', '?', '/']
let generateBtn = document.querySelector("#generate");
let result = [];
let randomNumber;
let randomUpper;
let randomLower;
let randomSpecial;
let passwordLength;


//Prompt to choose password length and characters
function chooseOption() {
  let passwordLength = prompt("Select your password length");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  //Password length requirements, numbers only
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose at least 8 characters, no more that 128 characters");
    return;
  };
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a Numeric value only");
    return;
  };
  //Prompts to ask user if they want to include character types
  let numberC = confirm("Do you want to include numbers?");
  console.log(numberC);
  let lowerCase = confirm("Do you want to include lower case letters?");
  console.log(lowerCase);
  let upperCase = confirm("Do you want to include upper case letters?");
  console.log(upperCase);
  let specialC = confirm("Do you want to include special characters?");
  console.log(specialC);
  //One character type is required
  if (!numberC && !lowerCase && !upperCase && !specialC) {
    alert("Please choose at least one character type in your password");
    return;
  };
  //Password gets generated
  if (numberC) {
    numberR();
  };
  if (lowerCase) {
    lowerR();
  };
  if (upperCase) {
    upperR();
  };
  if (specialC) {
    specialR();
  };
  combination();
  checkPasswordLength(passwordLength);
  //generatePassword();
return result;
};

//Random character types
function numberR() {
  let mathIndex = Math.floor(Math.random() * numberValue.length);
  let randomNumber = numberValue[mathIndex];
  result.push(randomNumber);
  console.log(randomNumber);
};
function lowerR() {
  let lowerIndex = Math.floor(Math.random() * lowerCaseValue.length);
  let randomLower = lowerCaseValue[lowerIndex];
  result.push(randomLower);
  console.log(randomLower);
};
function upperR() {
  let upperIndex = Math.floor(Math.random() * upperCaseValue.length);
  let randomUpper = upperCaseValue[upperIndex];
  result.push(randomUpper);
  console.log(randomUpper);
};
function specialR() {
  let specialIndex = Math.floor(Math.random() * specialValue.length);
  let randomSpecial = specialValue[specialIndex];
  result.push(randomSpecial);
  console.log(randomSpecial);
};
//console.log results and push up
function combination() {
  console.log(result);
  console.log(result.length);
};

//Check password length
function checkPasswordLength(lengthofPass) {
  if (result.length !== lengthofPass) {
    let difference = lengthofPass - result.length;
    for (let index = 0; index < difference; index++) { 
      numberR(); 
    };
  } else  {return};
};
//Generate password goes to choose options
function generatePassword() {
  let options = chooseOption();
  return options;
};
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  //removing the commas
  let removedCommasfromResult = password.join("");
  passwordText.value = removedCommasfromResult;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);