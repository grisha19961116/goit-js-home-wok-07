// Exercise 2

const ingredient = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

// first solution
const fragment = document.createDocumentFragment();
const ulDomFragment = document.querySelector("#ingredients");
const dynamicFragment = ingredient.forEach((elem) => {
  const elemLi = document.createElement("li");
  elemLi.textContent = elem;
  elemLi.classList.add("first");
  fragment.appendChild(elemLi);
});
ulDomFragment.appendChild(fragment);
console.log(ulDomFragment);
// second solution
const ulDomAppend = document.querySelector("#ingredients");
const dynamicAppend = ingredient.map((elem) => {
  const elemLi = document.createElement("li");
  elemLi.textContent = elem;
  elemLi.classList.add("second");
  return elemLi;
});
ulDomAppend.append(...dynamicAppend);
console.log(dynamicAppend);
// third solution
const ulDomPrepend = document.querySelector("#ingredients");
const dynamicPrepend = ingredient.map((elem) => {
  const elemLi = document.createElement("li");
  elemLi.textContent = elem;
  elemLi.classList.add("third");
  return elemLi;
});
ulDomPrepend.prepend(...dynamicPrepend);
console.log(dynamicPrepend);
