
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
// const dinamicIngrediant = ingredient.reduce( (acc,el,i) => {
//   const liRef = document.createElement('li');
//   liRef.textContent = ingredients[i];
//   el = liRef
//   const resalt = acc + el;
//   return resalt;
// },[]);
// console.log(dinamicIngrediant)

// const ingredientsRef = document.querySelectorAll('#ingredients');
// const resaltRest = ingredientsRef.append(...dinamicIngrediant);

//   console.log(resaltRest);
const ready = document.querySelector('#ingredients')

const dinamic = ingredient.map((elem) => {
  const just = document.createElement('li');
  just.textContent = elem;
  just.classList.add('second')
  return console.log(ready.appendChild(just));
})
// const as = [];
//  console.log(as.push.dinamic);
//  let ingredientsRef = document.querySelectorAll('#ingredients');
//  let resaltRest = ingredientsRef.append(...dinamic);
// console.log(resaltRest);