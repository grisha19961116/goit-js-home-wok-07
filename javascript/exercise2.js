
// В JS є масив рядків.

const ingredient = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву
//  ingredients створить окремий li,
//  після чого вставить всі li за одну операцію 
//  в список ul.ingredients. Для створення DOM-вузлів
//   використовуй document.createElement().
const ready = document.querySelector('#ingredients')

const dinamic = ingredient.map((elem) => {
  const just = document.createElement('li');
  just.textContent = elem;
  just.classList.add('second')
  return console.log(ready.appendChild(just));
})
