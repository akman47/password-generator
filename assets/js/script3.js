// welcome message
window.alert("Welcome to Password Generator! Let's set your password criteria.");

// prompt for password length
var askLength = function () {
    var length = window.prompt("How many characters would you like the password to contain?");
    // checks to make sure answer is a number
    if (isNaN(length)) {
        window.alert("Your answer is not a number. Please enter a number.");
        askLength(); 
    }
    // choose length of at least 8 characters and no more than 128 characters
    if (length < 8) {
        window.alert("Password must be at least 8 characters. Please enter a valid number.");
        return askLength();
    }
    else if (length > 128) {
         window.alert("Password must be less than 128 characters. Please enter a valid number.");
         return askLength();
    }

    return length;
}

var lowerCase = false;
var upperCase = false;
var numeric = false;
var specialChar = false;

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
            specialChar = true;
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

// Generate password with the chosen criteria
var generatePassword = function() {
    // gathering password criteria
    var length = askLength();
    charType();

    // possible character combinations
    var lowerOnly = "abcdefghijklmnopqrstuvwxyz";
    var upperOnly = lowerOnly.toUpperCase();
    var number = "0123456789";
    var special = "!@#$%^&*()-_+=[]{};':/?><.,~";
    var password = "";
    
    console.log(lowerCase, upperCase, numeric, specialChar);

    while (password.length < length) {
        if (lowerCase){
            password += lowerOnly.charAt(Math.floor(Math.random()*lowerOnly.length));
        }

        if (upperCase){
            password += upperOnly.charAt(Math.floor(Math.random()*upperOnly.length));
        }

        if (numeric) {
            password += number.charAt(Math.floor(Math.random()*number.length));
        }
    
        if (specialChar) {
            password += special.charAt(Math.floor(Math.random()*special.length));
        }
    }
    console.log("password", password, password.length);

    // To ensure password is the proper length
    var newPassword = "";
    for (i = 0; i < length; i++) {
        newPassword += password.charAt(i);
        console.log("new", newPassword, newPassword.length);
    };

    // reset for next password
    lowerCase = false;
    upperCase = false;
    numeric = false;
    specialChar = false;

    return newPassword;
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