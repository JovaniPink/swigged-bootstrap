//
// main.js
// Main Playground JavaScript
//

const ingredientTest = [{ id: 0, text: '2 Bacardi Rum', measurement: 'oz' }];

const currentIngredient = {
  id: 0,
  text: '',
  measurement: 'oz',
};

function captureCurrentIngredient(event) {
  currentIngredient.text = event.target.value;
}

document
  .querySelector('#ingredient-input')
  .addEventListener('input', captureCurrentIngredient);

/*
//jQuery Version
$('#ingredient-input').on('input',function(e){
    currentIngredient.text = e.target.value;
   });
*/

function DrawIngredient(ingredient) {
  const newIngredientHTML = `
  <div class="col col-12 ingredient-item p-2" ingredient-id="${ingredient.id}">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">${ingredient.measurement[0]}</span>
      </div>
      <input type="text" readonly class="form-control" aria-label="Ingredient Text"
        value="${ingredient.text}">
      <div class="input-group-append">
        <button type="button" class="btn btn-danger-soft" ingredient-id="${ingredient.id}" onclick="DeleteIngredient(this);">X</button>
      </div>
    </div>
  </div>
  `;

  const dummy = document.createElement('DIV');
  dummy.innerHTML = newIngredientHTML;
  document.querySelector('#ingredient-container').append(dummy.children[0]);

  /*
    //jQuery version
     let newIngredient = $.parseHTML(newIngredientHTML);
     $("#ingredient-container").append(newIngredient);
  */
}

function RenderAllIngredients() {
  const container = document.querySelector('#ingredient-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  /*
    //jQuery version
      $("ingredient-container").empty();
  */

  for (const element of ingredient) {
    DrawIngredient(element);
  }
}

RenderAllIngredients();

function DeleteIngredient(button) {
  const deleteID = parseInt(button.getAttribute('ingredient-id'));
  /*
    //jQuery version
      let deleteID = parseInt($(button).attr("ingredient-id"));
  */

  for (let i = 0; i < ingredient.length; i += 1) {
    if (ingredient[i].id === deleteID) {
      ingredient.splice(i, 1);
      RenderAllIngredients();
      break;
    }
  }
}

/*
function IngredientChecked(id) {
  ingredient[id].done = !ingredient[id].done;
  RenderAllIngredients();
}
*/

function CreateIngredient() {
  newingredient = {
    id: ingredient.length,
    text: currentIngredient.text,
    measurement: ['oz', 'ml', 'part'],
  };
  ingredient.push(newingredient);
  RenderAllIngredients();
}
