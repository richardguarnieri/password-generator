// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password generation function
const generatePassword = () => {
  // Variables declaration for letters, digits, symbols, boolean criterias, password criteria and password
  const upperCaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseletters = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%&';
  let passwordLength = ''
  let passwordUpperCaseLetters = false;
  let passswordLowerCaseLetters = false;
  let passwordDigits = false;
  let passwordSymbols = false;
  let passwordCriteria = '';
  let password = ''

  // Prompts for password criteria
  // Password length criteria prompt
  while (true) { // While loop to validate password length input from user
    passwordLength = parseInt(prompt("Please insert password length (between 8 and 128 characters)")); // Parses string to int
    // If after the string is parsed as an int, the value is still not a number, less than 8 or greater than 128 then pop an alert and keep the loop
    if ( (isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128) ) {
      alert('Please enter a valid length (between 8 and 128)');
    } else {
      break;
    }
  };
  // Rest of password criteria prompts
  // While loop to validate at least 1 criteria is selected
  while ((passwordUpperCaseLetters === false) && (passswordLowerCaseLetters === false) && (passwordDigits === false) && (passwordSymbols === false)) {
    passwordUpperCaseLetters = confirm('Do you want to include uppercase letters (e.g. ABC)?');
    passswordLowerCaseLetters = confirm('Do you want to include lowercase letters (e.g. abc)?');
    passwordDigits = confirm('Do you want to include digits (e.g. 345)?');
    passwordSymbols = confirm('Do you want to include digits (e.g. @#$%)?');
    if ((passwordUpperCaseLetters === false) && (passswordLowerCaseLetters === false) && (passwordDigits === false) && (passwordSymbols === false)) {
      alert('Please select at least one criteria!\nLet\'s go again!');
    } else {
      break;
    }
  }

  // Validate password criterias and concatenate variables to passwordCriteria variable
  if (passwordUpperCaseLetters) {
    passwordCriteria += upperCaseletters;
  } 
  if (passswordLowerCaseLetters) {
    passwordCriteria += lowerCaseletters;
  }
  if (passwordDigits) {
    passwordCriteria += digits;
  }
  if (passwordSymbols) {
    passwordCriteria += symbols;
  }

  // For loop to generate the password
  for (let i = 0; i < passwordLength; i++) {
    password += passwordCriteria.charAt(Math.floor(Math.random() * passwordCriteria.length))
  }

  // Alert msg
  alert('Congrats! Your password has been generated!');

  // Return password variable
  return password;
}