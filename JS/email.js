const signUpForm = document.getElementById('signUpForm');
const emailField = document.getElementById('emailField');
const okButton = document.getElementById('sendButton');
  
emailField.addEventListener('keyup', function (event) {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    okButton.disabled = false;
  } else {
    okButton.disabled = true;
  }
});
  
okButton.addEventListener('click', function (event) {
  signUpForm.submit();
});
