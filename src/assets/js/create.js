//
// create.js
// Create Cocktail module
//

'use strict';

var ingredient = [{ id: 0, text: 'Bacardi Rum', measurement: '2 oz' }];

var currentIngredient = {
  id: 0,
  text: '',
  measurement: '2 oz',
};

document
  .querySelector('#ingredient-input')
  .addEventListener('input', captureCurrentIngredient);

function drawIngredient(ingredient) {
  var newIngredientHTML = `
  <div class="ingredient-item" ingredient-id="${ingredient.id}">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">${ingredient.measurement}</span>
      </div>
      <input type="text" readonly class="form-control" aria-label="Ingredient Text"
        value="${ingredient.text}">
      <div class="input-group-append">
        <button type="button" class="btn btn-danger-soft" ingredient-id="${ingredient.id}" onclick="deleteIngredient(this);">X</button>
      </div>
    </div>
  </div>
  `;

  var dummy = document.createElement('DIV');
  dummy.innerHTML = newIngredientHTML;
  document.querySelector('#ingredient-container').append(dummy.children[0]);
}

function renderAllIngredients() {
  var container = document.querySelector('#ingredient-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (var element of ingredient) {
    drawIngredient(element);
  }
}

renderAllIngredients();

function captureCurrentIngredient(event) {
  currentIngredient.text = event.target.value;
}

function deleteIngredient(button) {
  var deleteID = parseInt(button.getAttribute('ingredient-id'));

  for (let i = 0; i < ingredient.length; i += 1) {
    if (ingredient[i].id === deleteID) {
      ingredient.splice(i, 1);
      renderAllIngredients();
      break;
    }
  }
}

function createIngredient() {
  var newingredient = {
    id: ingredient.length,
    text: currentIngredient.text,
    measurement: ['oz', 'ml', 'part'],
  };
  ingredient.push(newingredient);
  renderAllIngredients();
}