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
    var lowerUpper = lowerOnly + upperOnly;
    var lowNum = lowerOnly + number;
    var lowSpec = lowerOnly + special;
    var upNum = upperOnly + number;
    var upSpec = upperOnly + special;
    var numSpec = number + special;
    var lowUpNum = lowerUpper + number;
    var lowUpSpec = lowerUpper + special;
    var upNumSpec = upperOnly + number + special;
    var lowNumSpec = lowerOnly + number + special;
    var all = lowerOnly + upperOnly + number + special;
    var password = "";

    console.log(lowerCase, upperCase, numeric, specialChar);

    // lower case only
    if (lowerCase && !upperCase && !numeric && !specialChar) {
        for (i = 0, n = lowerOnly.length; i < length; i++) {
            password += lowerOnly.charAt(Math.floor(Math.random()*n));
        }
    }
    // upper case only
    else if (!lowerCase && upperCase && !numeric && !specialChar) {
        for (i = 0, n = upperOnly.length; i < length; i++) {
            password += upperOnly.charAt(Math.floor(Math.random()*n));
        }
    }
    // numeric only
    else if (!lowerCase && !upperCase && numeric && !specialChar) {
        for (i = 0, n = number.length; i < length; i++) {
            password += number.charAt(Math.floor(Math.random()*n));
        }
    }
    // special characters only
    else if (!lowerCase && !upperCase && !numeric && specialChar) {
        for (i = 0, n = special.length; i < length; i++) {
            password += special.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case and upper case only
    else if (lowerCase && upperCase && !numeric && !specialChar) {
        for (i = 0, n = lowerUpper.length; i < length; i++) {
            password += lowerUpper.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case and numeric only
    else if (lowerCase && !upperCase && numeric && !specialChar) {
        for (i = 0, n = lowNum.length; i < length; i++) {
            password += lowNum.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case and special characters only
    else if (lowerCase && !upperCase && !numeric && specialChar) {
        for (i = 0, n = lowSpec.length; i < length; i++) {
            password += lowSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    // upper case and numeric only
    else if (!lowerCase && upperCase && numeric && !specialChar) {
        for (i = 0, n = upNum.length; i < length; i++) {
            password += upNum.charAt(Math.floor(Math.random()*n));
        }
    }
    // upper case and special characters only
    else if (!lowerCase && upperCase && !numeric && specialChar) {
        for (i = 0, n = upSpec.length; i < length; i++) {
            password += upSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    // numeric and special characters only
    else if (!lowerCase && !upperCase && numeric && specialChar) {
        for (i = 0, n = numSpec.length; i < length; i++) {
            password += numSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case, upper case, and numbers
    else if (lowerCase && upperCase && numeric && !specialChar) {
        for (i = 0, n = lowUpNum.length; i < length; i++) {
            password += lowUpNum.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case, upper case, and special characters
    else if (lowerCase && upperCase && !numeric && specialChar) {
        for (i = 0, n = lowUpSpec.length; i < length; i++) {
            password += lowUpSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    // upper case, numbers, and special characters
    else if (!lowerCase && upperCase && numeric && specialChar) {
        for (i = 0, n = upNumSpec.length; i < length; i++) {
            password += upNumSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    // lower case, number, and special characters
    else if (lowerCase && !upperCase && numeric && specialChar) {
        for (i = 0, n = lowNumSpec.length; i < length; i++) {
            password += lowNumSpec.charAt(Math.floor(Math.random()*n));
        }
    }
    else if (lowerCase && upperCase && numeric && specialChar) {
        for (i = 0, n = all.length; i < length; i++) {
            password += all.charAt(Math.floor(Math.random()*n));
            console.log(password);
        }
    }

    // reset for next password
    lowerCase = false;
    upperCase = false;
    numeric = false;
    specialChar = false;

    return password;
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