// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {


  /*
testing section remove for final code push
*/

  includeUpperCase = 1;
  includeLowerCase = 0;
  includeNumbers = 1;
  includeSymbols = 1;

  charactherLength = 9;

  /*
testing section remove for final code push
*/

  finalPass = '';

  var characterObject = {

    getUpperCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },

    getLowerCase: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    getNumbers: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },

    getSymbols: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
    },

    getAllChar: function allChar() {
      
      combinedItems = '';

      var up  = this.getUpperCase();
      var low = this.getLowerCase();
      var num = this.getNumbers();
      var sym = this.getSymbols();

      if (includeUpperCase) {
        combinedItems = combinedItems.concat(up);
      }

      if (includeLowerCase) {
        combinedItems = combinedItems.concat(low);
      }

      if (includeNumbers) {
        combinedItems = combinedItems.concat(num);
      }

      if (includeSymbols) {
        combinedItems = combinedItems.concat(sym);
      }

      return combinedItems;
    },
  };

  for (var i = 0; i < charactherLength; i++) {
    finalPass = finalPass + characterObject.getAllChar()[ Math.floor(Math.random() * characterObject.getAllChar().length)];
  }
  return finalPass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
