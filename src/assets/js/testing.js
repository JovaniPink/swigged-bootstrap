// #email-input could be "", null, undefined, OR a proper string email

document.querySelector('#email-input').value;

// onkeyup="checkform()

function checkform() {
  const form = document.forms['signup'].elements;
  let cansubmit = true;

  for (const element of form) {
    if (element.value.length == 0) cansubmit = false;
  }

  document.querySelector('#signUpButton').disabled = !cansubmit;
}

window.addEventListener('load', checkform);

//jQuery

function deafaultSettingEmptyTrue(empty) {
  if ($(this).val() == '') {
    empty = true;
  }
}

function checkIfEmailIsEntered() {
  let empty = false;
  $('form > input').each(deafaultSettingEmptyTrue(empty));

  if (empty) {
    $('#signUpButton').attr({
      'data-toggle': 'modal',
      href: '#modalSignupVertical',
    }); // data-toggle="modal" href="#modalSignupVertical"
  } else {
    $('#signUpButton').removeAttr('disabled');
  }
}

(function() {
  $('form > input').keyup(checkIfEmailIsEntered());
})();
