const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const addIngredients = ingredients.map((element) => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');

  return item;
});

list.append(...addIngredients);

// ingredients.forEach(ingredient => {
//   const list = document.querySelector('#ingredients');
//   const item = document.createElement('li');
//   console.log(item);
//   item.textContent=`${ingredient}`;
//   item.classList.add('item');
//   console.log(item.textContent);
//   list.append(item);
// });
