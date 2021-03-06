// #emailInput could be "", null, undefined, OR a proper string email, below:
// REGEX ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
var signUpForm = document.querySelector('#signUpForm');
var signUpInput = document.querySelector('#signUpInput');
var signUpButton = document.querySelector('#signUpButton');
var modalInput = document.querySelector('#modalSignUpVerticalEmail');
// const machine = {
//   initial: 'required',
//   states: {
//     needingEmail: {},
//     pending: {},
//     emailValidated: {},
//   }
// }
// const transition = (state, event) => {
//   switch (state) {
//     case 'needingEmail':
//       return 'pending';
//     case 'pending':
//       switch (event.type) {
//         case :
//           break;
//         default:
//           break;
//       }
//     case 'emailValidated':
//       return 'pending';
//     default:
//       return 'needingEmail';
//   }
// }
// let current = signUpForm.dataset.state;
// function activate(state) {
// }
function transferEmailToModal(email) {
    return (modalInput.value = email);
}
signUpInput.addEventListener('change', function (event) {
    if (signUpInput.validity.typeMismatch || signUpInput.value === '') {
        signUpInput.setCustomValidity('I am expecting an e-mail address.');
        signUpButton.setAttribute('disabled', '');
    }
    else {
        signUpButton.removeAttribute('disabled');
        // setAttributes(signUpButton, {
        //   'data-toggle': 'modal',
        //   href: '#modalSignUpVertical',
        // }); // data-toggle="modal" href="#modalSignUpVertical"
        transferEmailToModal(signUpInput.value);
    }
});
