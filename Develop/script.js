// Assignment Code
let lowerCaseValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numberValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialValue = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ':', ';', '`', '~', '<', ',', '>', '.', '?', '/']
let generateBtn = document.querySelector("#generate");

//Prompt to choose password length and characters
function chooseOption() {
  let passwordLength = prompt("Select your password length");
  passwordLength = parseInt(passwordLength);
  console.log(typeof passwordLength);
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose at least 8 characters, no more that 128 characters");
    return;
  };
}
//Generate password goes to choose options
function generatePassword() {
  let options = chooseOption();
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
