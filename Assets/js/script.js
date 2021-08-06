// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
let count = window.prompt("How many characters do you want on your password?")
let specialValues = ["!", "@", "#", "$", "%", "&", "/", "(", ")", "*", "+", "-", "?", ",", "=", "<", ">", "~", ";", ":", "."];
let numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowerValues = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let upperValues = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let chosenValues = [];
let passwordValues = [];

console.log(count);

if (count>=8 && count<= 128){
  var special = window.confirm("Would you like special characters in your password?");
    if (special===true){
    chosenValues = [...chosenValues, ...specialValues]
    console.log(chosenValues)
    };
    
  var numeric = window.confirm("Would you like numeric characters in your password?");
    if (numeric===true){
    chosenValues = [...chosenValues, ...numericValues]
    console.log(chosenValues)
    };

  var lower = window.confirm("Would you like lowercase characters in your password?");
    if (lower===true){
    chosenValues = [...chosenValues, ...lowerValues]
    console.log(chosenValues)
    };

  var upper = window.confirm("Would you like uppercase characters in your password?");
    if (upper===true){
    chosenValues = [...chosenValues, ...upperValues]
    console.log(chosenValues)
   };

  for (let i=0; i<count; i++) {
     var randomNumber=Math.floor(Math.random() * chosenValues.length);
     passwordValues.push(chosenValues[randomNumber]);
     console.log(passwordValues)
   }

} else {
  window.alert("Please enter a valid amount between 8 and 128.")
}

return passwordValues.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
