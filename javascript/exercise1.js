// Write script which execute next operations .
// 1) Count and lead out into console quantity categories for ul#categories,
//  meant elements li.item. Will be in list "three category".
// 2) Fro each  li.item in  ul#categories, find and show quantity elements into category
// and lead out into console text title elements (teg h2) and quantity elements into the category
// all inserted into him elements (li).For example in first category will be:
// category: pets ,
// quantity elements: 4
const allItemsFromCategories = document.querySelectorAll(".item");
console.log(`У списку '${allItemsFromCategories.length}' категорії.`);

const amountCategory = allItemsFromCategories.forEach((el) => {
  console.log(`Категорія: ${el.firstElementChild.textContent}.`),
    console.log(
      `Кількість елементів: ${el.lastElementChild.childElementCount}.`
    );
});
console.log(amountCategory);
