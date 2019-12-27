//
// main.js
// Main Playground JavaScript
//

let ingredient = [{ id: 0, text: '2 Bacardi Rum', measurement: 'oz' }];

let currentIngredient = {
  id: 0,
  text: '',
  measurement: 'oz',
};

document.getElementById('ingredient-input').oninput = function(e) {
  currentIngredient.text = e.target.value;
};

/*
//jQuery Version
$('#ingredient-input').on('input',function(e){
    currentIngredient.text = e.target.value;
   });
*/

function DrawIngredient(ingredient) {
  let newIngredientHTML = `
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

  let dummy = document.createElement('DIV');
  dummy.innerHTML = newIngredientHTML;
  document
    .getElementById('ingredient-container')
    .appendChild(dummy.children[0]);

  /*
    //jQuery version
     let newIngredient = $.parseHTML(newIngredientHTML);
     $("#ingredient-container").append(newIngredient);
  */
}

function RenderAllIngredients() {
  let container = document.getElementById('ingredient-container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  /*
    //jQuery version
      $("ingredient-container").empty();
  */

  for (let i = 0; i < ingredient.length; i++) {
    DrawIngredient(ingredient[i]);
  }
}

RenderAllIngredients();

function DeleteIngredient(button) {
  let deleteID = parseInt(button.getAttribute('ingredient-id'));
  /*
    //jQuery version
      let deleteID = parseInt($(button).attr("ingredient-id"));
  */

  for (let i = 0; i < ingredient.length; i++) {
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
