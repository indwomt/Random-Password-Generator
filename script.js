// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min ;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1-rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
var lengthPrompt = window.prompt('Choose password length (8-120 characters)');

if (lengthPrompt < 8 || lengthPrompt > 120) {
  window.alert("Length needs to be between 8 and 120.")
  return
};

var passwordLength = parseInt(lengthPrompt)

var lowercasePrompt = window.confirm('Would you like to include lowercase letters?')
var uppercasePrompt = window.confirm('Would you like to include uppercase letters?')
var numberPrompt = window.confirm('Would you like to include numbers?')
var symbolsPrompt = window.confirm('Would you like to include symbols?')

let lowercaseArr = ["a", 'b', 'c', 'd', 'e']
let uppercaseArr = ["A", 'B', 'C', 'D', 'E']
let numberArr = [1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10]
let symbolsArr = ["!", "@", '#', '$', '%', '^', '&', '*', '(', ')' ]


let passwordCart = []

if (lowercasePrompt === true) {
  passwordCart.push(lowercaseArr)
}

if (uppercasePrompt === true) {
  passwordCart.push(uppercaseArr)
}

if (numberPrompt === true) {
  passwordCart.push(numberArr)
}

if (symbolsPrompt === true) {
  passwordCart.push(symbolsArr)
}

console.log(passwordCart);

var passwordCompleted = ''

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(passwordCart);
  var randomChar = getRandomItem(randomList);
  passwordCompleted += randomChar
}


console.log(passwordCompleted);
return passwordCompleted

}







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
