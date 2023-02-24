const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');


const addlistIngredients = ingredients.map(Ingred => {
const IngredientsLi = document.createElement('li');
IngredientsLi.textContent = Ingred;
IngredientsLi.classList.add('item');

return IngredientsLi;
});


listIngredients.append(...addlistIngredients);

console.log(listIngredients);
