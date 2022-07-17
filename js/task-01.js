const allCategories = document.querySelector('#categories');
const listItem = document.querySelectorAll('.item');
const headingArray = Array.from(listItem);
console.log(`Number of categories: ${allCategories.children.length}`);
const headingArrayMap = headingArray.map(element => {
      return console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`);
});