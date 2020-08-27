// Завдання 3
// Напиши скрипт для створення галереї зображень по масиву даних.

// В HTML є список ul#gallery.

// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li.
//  Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
// Задача 3
// 1)callback forEach не возвращает вообще ничего
// 2) вставлять нужно за 1 действие
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// first solution
const fragment = document.createDocumentFragment();
const ulDomFragments = document.querySelector('#gallery');

const addPhotosWithFragments = images.map((elem) => {
  const create = document.createElement('img');
  create.setAttribute("src",elem.url);
  create.setAttribute("alt",elem.alt);
  create.classList.add('just');
  fragment.appendChild(create);
 });
ulDomFragments.appendChild(fragment);
console.log(ulDomFragments);
// second solution
const ulDomAppend = document.querySelector('#gallery');
const addPhotosWithApend = images.map((elem) => {
  const create = document.createElement('img');
  create.setAttribute("src",elem.url);
  create.setAttribute("alt",elem.alt);
  create.classList.add('just','just-2');
  return create;
 });
 ulDomAppend.append(...addPhotosWithApend);
 console.log(ulDomAppend);

// third solution
const ulDomPreapend = document.querySelector('#gallery');
const addPhotosWithPreapend = images.map((elem) => {
  const create = document.createElement('img');
  create.setAttribute("src",elem.url);
  create.setAttribute("alt",elem.alt);
  create.classList.add('just','just-3');
  return create;
 });
 ulDomAppend.prepend(...addPhotosWithPreapend);
 console.log(ulDomPreapend);
