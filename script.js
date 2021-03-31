// Assignment code here
window.alert("Welcome to Password Generator! Let's set your password criteria.");

// Setting password criteria



// Prompt for password length
var askLength = function () {
    var length = window.prompt("How many characters are in the password? (min 8, max 128)");
    if (isNaN(length)) {
        window.alert("Your answer is not a number. Please enter a number between 8 to 128");
        askLength(); 
    }
// Choose length of at least 8 characters and no more than 128 characters
    if (length < 8 || length > 128) {
        window.alert("You need to provide a length between 8 and 128 characters. Please enter a valid number.");
        return askLength();
    }
    console.log(length);
    return length;
}

askLength();

var lowerCase;
var upperCase;
var numeric;
var specialChar;

// Prompt for which character types to include
// Choose lowercase, uppercase, numeric, and/or special characters
// When each prompt is answered, input is validated and at least one character type selected
var charType = function() {
    var charTypePrompt = window.prompt("Which character types would you like to include? Please enter 1 for lowercase, 2 for uppercase, 3 for numeric, and 4 for special characters.");
    charTypePrompt = parseInt(charTypePrompt);
    switch(charTypePrompt) {
        case 1:
            lowerCase = true;
            var charConfirm = window.confirm("Your password will include lower case characters. Would you like to add another character type?");
            if (charConfirm) {
                charType();
            }
            break;
        case 2:
            upperCase = true;
            charConfirm = window.confirm("Your password will include uppercase characters. Would you like to add another character type?");
            if (charConfirm) {
                charType();
            }
            break;
        case 3:
            numeric = true;
            charConfirm = window.confirm("Your password will include numeric characters. Would you like to add another character type?");
            if (charConfirm) {
                charType();
            }
            break;
        case 4: 
            special = true;
            charConfirm = window.confirm("Your password will include special characters. Would you like to add another character type?");
            if (charConfirm) {
                charType();
            }
            break;
        default:
            window.alert("You must pick at least one character type");
            charType();
            break;
    }
}

charType(); 
console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(special);
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