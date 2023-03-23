// Assignment code here
// Arrays for storing password data
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~=<>{\}[]:;'?/-`,.|";

// This function generates the password
function generatePassword() {
    var password = "";
    var characters = ""

// These prompts and confirms determine the criteria for the password
    var passwordLength = prompt("How many characters do you want in your password? (Must be 8 to 128 characters)");
    if(passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8 and 128.");
        return "";
    }

    var includeUpperCase = confirm("Do you want to include uppercase letters?");
    var includeLowerCase = confirm("Do you want to include lowercase letters?");
    var includeNumbers = confirm("Do you want to include numbers?");
    var includeSpecialCharacters = confirm("Do you want to include special characters?");

// This conditional statement forces the user to select one criteria so that the password isn't null
    if(!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters) {
        alert("At least one character type must be chosen.");
        return "";
    }

// These if statements make it so if a criteria is selected then it will choose characters from that specific array and add it to the password array
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

// This for loop makes it so once an array has been created using the criteria it will only be as long as passwordLength and characters will be chosen at random out of the charcters array
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
