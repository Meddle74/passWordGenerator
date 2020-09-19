// Assignment Code
var generateBtn = document.querySelector('#generate');

var includeUpperCase = '';
var includeLowerCase = '';
var includeNumbers = '';
var includeSymbols = '';
var finalPass = '';
var password_length = '';

function generatePassword() {
  
  var password_length = prompt(
    'How many characters would you like your password to contain?'
  );

  // check to verify password is a number
  while (isNaN(password_length)) {
    alert('Password length must be a number');
    var password_length = prompt(
      'How many characters would you like your password to contain?'
    );
  }
  
  //check to make sure password_length is the correct length and then also verify again if it a number in case it gets out of loop
  while (password_length <= 7 || password_length >= 129) {
    alert('Password must be between 8 and 128 characthers in length');
    var password_length = prompt(
      'How many characters would you like your password to contain?'
    );
    while (isNaN(password_length)) {
      alert('Password length must be a number');
      var password_length = prompt(
        'How many characters would you like your password to contain?'
      );
    }
  }

  //prompts to select items in password
  var includeUpperCase = confirm(
    'Click ok of you want your password to include uppercase letters'
  );
  var includeLowerCase = confirm(
    'Click ok of you want your password to include lowercase letters'
  );
  var includeNumbers = confirm(
    'Click ok of you want your password to include numbers'
  );
  var includeSymbols = confirm(
    'Click ok of you want your password to include symbols'
  );

  // make sure one selection has been confirmed
  while (
    includeUpperCase === false &&
    includeLowerCase === false &&
    includeNumbers === false &&
    includeSymbols === false
  ) {
    alert('You must choose at least one parameter');
    var includeUpperCase = confirm(
      'Click ok of you want your password to include uppercase letters'
    );
    var includeLowerCase = confirm(
      'Click ok of you want your password to include lowercase letters'
    );
    var includeNumbers = confirm(
      'Click ok of you want your password to include numbers'
    );
    var includeSymbols = confirm(
      'Click ok of you want your password to include symbols'
    );
  }

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

  for (var i = 0; i < password_length; i++) {
    finalPass = finalPass + characterObject.getAllChar()[Math.floor(Math.random() * characterObject.getAllChar().length)];
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
