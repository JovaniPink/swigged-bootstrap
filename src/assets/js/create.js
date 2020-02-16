//
// create.js
// Create Cocktail module
//

'use strict';

var ingredient = [{ id: 0, product: 'Bacardi Rum', measurement: '2 oz' }];

var currentIngredient = {
  id: 0,
  product: '',
  measurement: '2 oz',
};

var inputElem = document.querySelector('#ingredient-input');

inputElem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    createIngredient();
  }
});
inputElem.addEventListener('input', captureCurrentIngredient);

function drawIngredient(ingredient) {
  var newIngredientHTML = `
  <div class="ingredient-item mb-2" ingredient-id="${ingredient.id}">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text" ingredient-id="${ingredient.id}" onclick="editMeasurement(this)">${ingredient.measurement}</span>
      </div>
      <input type="text" readonly class="form-control" aria-label="Ingredient Text"
        value="${ingredient.product}">
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
  currentIngredient.product = event.target.value;
}

function deleteIngredient(span) {
  var deleteID = parseInt(span.getAttribute('ingredient-id'));

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
    product: currentIngredient.product,
    measurement: ['oz', 'ml', 'part'],
  };
  ingredient.push(newingredient);
  renderAllIngredients();
}

function editMeasurement(button) {
  var measurementID = parseInt(button.getAttribute('ingredient-id'));

  for (let i = 0; i < ingredient.length; i += 1) {
    if (ingredient[i].id === measurementID) {
      $('#modalMeasurement').modal('toggle')
      renderAllIngredients();
      break;
    }
  }
}

function update() {
  var saveAmount = document.querySelector('#amount').value;
  console.log(saveAmount);
  var saveUnit = document.querySelector('.btn:not(.disabled).active').innerText;
  console.log(saveUnit);
}

// formElem.onsubmit = async (e) => {
//   e.preventDefault();

//   let response = await fetch('/article/formdata/post/user', {
//     method: 'POST',
//     body: new FormData(formElem)
//   });

//   let result = await response.json();

//   alert(result.message);
// }