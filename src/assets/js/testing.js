// #email-input could be "", null, undefined, OR a proper string email

const emailInput = document.querySelector('#emailInput');
const signUpButton = document.querySelector('#signUpButton');

// function setAttributes(el, attrs) {
//   Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
// }

function transferEmailToModal(email) {
  document.querySelector('#registrationEmailModal').value = email;
}

emailInput.addEventListener('input', function(event) {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity('I am expecting an e-mail address!');
  } else {
    signUpButton.removeAttribute('disabled');
    // setAttributes(signUpButton, {
    //   'data-toggle': 'modal',
    //   href: '#modalSignupVertical',
    // }); // data-toggle="modal" href="#modalSignupVertical"
    transferEmailToModal(emailInput.value);
  }
});
