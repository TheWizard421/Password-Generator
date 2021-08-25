// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordcharacters = '';
  var passwordLength = prompt('Please Enter a number bwtween 8 and 128')
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 1 and 128")
    return "this would be the password"
  }
  console.log(passwordLength)
  var passwordLowercase = confirm('Allow Lower case')
  if (passwordLowercase) {
    passwordcharacters += 'abcdefghijklmnopqrstuvwxyz'
  }
  console.log("Lowercase:",passwordLowercase)
  var passwordUppercase = confirm('Allow Upper case')
  if (passwordUppercase) {
    passwordcharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  console.log('Uppercase:',passwordUppercase)
  var passwordNumeric = confirm('Allow Numbers')
  if (passwordNumeric)  {
    passwordcharacters += '1234567890'
  }
  console.log('Numeric:',passwordNumeric)
  var passwordSpecial = confirm('Allow Special Characters')
  if (passwordSpecial)  {
    passwordcharacters += '!@#$%^&*<>?-=_+'
  }
  console.log('Special Characters:',passwordSpecial)
  console.log(passwordcharacters)

  var finalpassword = '';
  
  for (let i = 0; i < passwordLength; i++) {
    finalpassword = finalpassword + passwordcharacters.charAt(Math.floor(Math.random()) * passwordLength)
}
return finalpassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
