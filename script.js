// Array of special characters to be included in password
var symbols = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//set default password length
let pwdLength = 12;
document.getElementById('pswdLen').value = pwdLength;

// variables to accept user inputs 
let useSpecialChr = true;
let isExecuted    = true;
let useLowercase  = true;
let useUppercase  = true;
let useNumeric    = true;


// Get references to the #generate element
const result = document.querySelector("#password");
const generateBtn = document.querySelector('#generate');

// Function to prompt user for password options
function getPasswordOptions() {

  //get complexity for the password
  isExecuted = confirm("Choose your options...");
  useLowercase = confirm("Would you like to use Lowercase?");
  useUppercase = confirm("Would you like to use Uppercase?");
  useNumeric = confirm("Would you like to use Numeric?");
  useSpecialChr = confirm("Would you like to use Special characeters ($@%&*, etc) ?");
  pwdLength = document.getElementById('pswdLen').value;
};

generateBtn.addEventListener("click", () => {
  //get user inputs 
  getPasswordOptions();

  //generate password
  result.value = generatePassword(useNumeric, useLowercase, useUppercase, useSpecialChr, pwdLength);
  console.log(result.value);
});

// Function to generate password with user input
function generatePassword(number, lowercase, uppercase, symbol, length) {
  let generatedPassword = "";

  let variationsCount = [number, lowercase, uppercase, symbol, length].length;

  if(length < 10 || length > 64){
    return 'Invalid Password Length';
  }

  /* code for debugging  
  console.log("variationsCount = " + variationsCount);
  console.log("number = "+ number);
  console.log("lowercase = "+ lowercase);
  console.log("uppercase = "+ uppercase);
  console.log("symbol = "+ symbol);
  console.log("length = "+ length);
  */ 

  for (let i= 0; i < length; i++) {
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    if (lowercase) {
      generatedPassword += getRandomLower();
    }
    if (uppercase) {
      generatedPassword += getRandomUpper();
    }
  }
  const finalPassword = generatedPassword.slice(0, length-1);

  return finalPassword;
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

