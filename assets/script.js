// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~=<>{\}[]:;'?/-`,.|";

function generatePassword() {
    var password = "";

    var passwordLength = prompt("How many characters do you want in your password? (Must be 8-128 characters)");
    if(passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8 and 128.");
        return "";
    }

    var includeUpperCase = confirm("Do you want to include uppercase letters?");
    var includeLowerCase = confirm("Do you want to include lowercase letters?");
    var includeNumbers = confirm("Do you want to include numbers?");
    var includeSpecialCharacters = confirm("Do you want to include special characters?");

    if(!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters) {
        alert("At least one character type must be selected.");
        return "";
    }

    var characters = ""; 
    if(includeUpperCase) {
        characters += upperCase;
    }
    if(includeLowerCase) {
        characters += lowerCase;
    }
    if(includeNumbers) {
        characters += numbers;
    }
    if(includeSpecialCharacters) {
        characters += specialCharacters;
    }

    for (var i = 0; i<passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    alert("Your generated password is: " + password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
