const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const newList = [];

const addIngredients = ingredients.forEach((element) => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  newList.push(item);
});

list.append(...newList);
