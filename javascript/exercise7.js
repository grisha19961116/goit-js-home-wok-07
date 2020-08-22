// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size.
//   В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const bodyRef = document.querySelector('body');
const input = document.createElement('input');
input.classList.add('input-last');
input.id = "font-size-control";
input.setAttribute('type',"range");
bodyRef.appendChild(input);

const span = document.createElement('span');
span.classList.add('span-last');
span.id = "text";
span.textContent = `Абракадабра!`;
bodyRef.appendChild(span);

const hounterIput = (event) => {
  span.classList.add('span-last__change');
  const variable = Math.round(event.clientX/50);
  const num = 2;
  const resalt = variable*num+`px`;
  span.style.fontSize= resalt;
};
input.addEventListener('mouseup',hounterIput);
console.log(bodyRef)


