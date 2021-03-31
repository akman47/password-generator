// Assignment code here
window.alert("Welcome to Password Generator! Let's set your password criteria.");

// Setting password criteria



// Prompt for password length
var askLength = function () {
    var length = window.prompt("How many characters are in the password? (min 8, max 128)");

// Choose length of at least 8 characters and no more than 128 characters
    if (length < 8 || length > 128) {
        window.alert("You need to provide a length between 8 and 128 characters. Please enter a valid number.");
        return askLength();
    }

    console.log(length);
}

askLength();

// Prompt for character types to include
// Choose lowercase, uppercase, numeric, and/or special characters
// When each prompt is answered, input is validated and at least one character type selected

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