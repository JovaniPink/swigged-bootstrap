//
// emailCheckerModal.js
// Theme module
//

'use strict';

// #email-input could be "", null, undefined, OR a proper string email

var emailInput = document.querySelector('#emailInput');
var signUpButton = document.querySelector('#signUpButton');

// function setAttributes(el, attrs) {
//   Object.keys(attrs).forEach((key) => el.setAttribute(key, attrs[key]));
// }

function transferEmailToModal(email) {
  document.querySelector('#modalSignupVerticalEmail').value = email;
}

// emailInput.addEventListener(
//   'input',
//   function(event) {
//     if (emailInput.validity.typeMismatch) {
//       emailInput.setCustomValidity('I am expecting an e-mail address!');
//     } else {
//       signUpButton.removeAttribute('disabled');
//       // setAttributes(signUpButton, {
//       //   'data-toggle': 'modal',
//       //   href: '#modalSignupVertical',
//       // }); // data-toggle="modal" href="#modalSignupVertical"
//       transferEmailToModal(emailInput.value);
//     }
//   },
//   false
// );

var eventHandler = {
  handlers: {
    input(event) {
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
    },
    change(event) {
      if (!(emailInput.value === undefined) || !(emailInput.value === '')) {
        signUpButton.disabled = true;
      } else {
        signUpButton.removeAttribute('disabled');
        // setAttributes(signUpButton, {
        //   'data-toggle': 'modal',
        //   href: '#modalSignupVertical',
        // }); // data-toggle="modal" href="#modalSignupVertical"
        transferEmailToModal(emailInput.value);
      }
    },
    default(event) {
      console.log('unhandled');
    },
  },
  handleEvent(evt) {
    switch (evt.type) {
      case 'input':
        this.handlers.input(event);
        break;
      case 'change':
        this.handlers.change(event);
        break;
      default:
        this.handlers.default(event);
    }
  },
};

Object.keys(eventHandler.handlers).map((eventName) =>
  emailInput.addEventListener(eventName, eventHandler)
);
