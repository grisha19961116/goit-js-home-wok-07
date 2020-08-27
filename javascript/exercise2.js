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

// first solution

const fragment = document.createDocumentFragment();
const ready = document.querySelector('#ingredients');
const dinamic = ingredient.forEach((elem) => {
      const elemLi = document.createElement('li');
      elemLi.textContent = elem;
      elemLi.classList.add('first');
      fragment.appendChild(elemLi);
    });
ready.appendChild(fragment);
// second solution
        const readyAppend = document.querySelector('#ingredients');
        const dinamAppend = ingredient.map((elem) => {
        const elemLi = document.createElement('li');
        elemLi.textContent = elem;
        elemLi.classList.add('second');
        return elemLi;
      });
        readyAppend.append(...dinamAppend);
        console.log(dinamAppend);
// third solution
        const readyPreapend = document.querySelector('#ingredients');
        const dinamPreapend = ingredient.map((elem) => {
        const elemLi = document.createElement('li');
        elemLi.textContent = elem;
        elemLi.classList.add('third');
        return elemLi;
      });
      readyAppend.prepend(...dinamPreapend);
      console.log(dinamPreapend)



