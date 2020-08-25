// Задача 2
// 1) просто не решена. callback map не возвращает console.log
// 2) вставлять нужно за 1 действие

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
const addElement = function(elem){
  const elemLi = document.createElement('li');
  elemLi.textContent = elem;
  elemLi.classList.add('second');
  return elemLi;
}

const ready = document.querySelector('#ingredients')

const dinamic = function (ingredient) {
  ingredient.forEach((elem) => {
      const newLiFromElements = addElement(elem);
      ready.appendChild(newLiFromElements)
      console.log(newLiFromElements);
    })
};

// одна дія як і просив,і консоль повертає!
dinamic(ingredient);


