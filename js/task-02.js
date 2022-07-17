const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (ingredient) {
  const list = document.querySelector("#ingredients");
  const item = document.createElement("li");
  console.log(item);
  item.textContent=`${ingredient}`;
  item.classList.add('item');
  console.log(item.textContent);
  list.append(item);
});
