// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneCap) => {
    if (state.mushrooms) oneCap.style.visibility = 'visible';
    else oneCap.style.visibility = 'hidden';
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((pepper) => {
    if (state.greenPeppers) pepper.style.visibility = 'visible';
    else pepper.style.visibility = 'hidden';
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) sauce.className = 'sauce sauce-white';
    else sauce.className = 'sauce';
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) crust.className = 'crust crust-gluten-free';
    else crust.className = 'crust';
  });
}

function renderButtons(name, state) {
  //if (state) name.target.className = name.target.className + ' active';
  //else name.target.className = cleanString(name.target.className);
}

function renderPrice(price, name, state) {
  const total = document.querySelector('.total');
  const products = document.querySelectorAll('.products li');

  if (state) {
    products[products.length - 1].insertAdjacentHTML(
      'afterend',
      `<li>+ $${price} ${name}<li>`
    );
    console.log(total.innerText);
    total.innerText = parseInt(total.innerText) + price;
  } else {
    Array.from(products).forEach((products) => {
      if (products.innerText == `+ $${price} ${name}`) {
        products.remove();
        total.innerText = parseInt(total.innerText) - price;
      }
    });
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('body').addEventListener('click', (e) => {
  switch (cleanString(e.target.className)) {
    case 'btn btn-pepperoni':
      state.pepperoni = !state.pepperoni;
      renderButtons(e.target, state.pepperoni);
      renderPrice(1, 'pepperoni', state.pepperoni);
      break;
    case 'btn btn-mushrooms':
      state.mushrooms = !state.mushrooms;
      renderButtons(e.target, state.mushrooms);
      renderPrice(1, 'mushrooms', state.mushrooms);
      break;
    case 'btn btn-green-peppers':
      state.greenPeppers = !state.greenPeppers;
      renderButtons(e.target, state.greenPeppers);
      renderPrice(1, 'green peppers', state.greenPeppers);
      break;
    case 'btn btn-sauce':
      state.whiteSauce = !state.whiteSauce;
      renderButtons(e.target, state.whiteSauce);
      renderPrice(3, 'white sauce', state.whiteSauce);
      break;
    case 'btn btn-crust':
      state.glutenFreeCrust = !state.glutenFreeCrust;
      renderButtons(e.target, state.glutenFreeCrust);
      renderPrice(5, 'gluten-free crust', state.glutenFreeCrust);
      break;
    default:
      return null;
  }
  renderEverything();
});

function cleanString(name) {
  const split = name.split(' active');
  return split[0];
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
