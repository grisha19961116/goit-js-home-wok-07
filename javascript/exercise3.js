// Exercise 3
// Write script for creat image gallery by data massive.
// In HTML is list ul#gallery.
// <ul id="gallery"></ul>
// Use massive arrays images for create teg "img" into li.
// Fro create grid use template row and insertAdjacentHTML().
// All elements gallery have to add into DOM by one action to insert.
// Add minimal styles.
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// first solution
const fragment = document.createDocumentFragment();
const ulDomFragments = document.querySelector("#gallery");

const addPhotosWithFragments = images.map((elem) => {
  const create = document.createElement("img");
  create.setAttribute("src", elem.url);
  create.setAttribute("alt", elem.alt);
  create.classList.add("just");
  fragment.appendChild(create);
});
ulDomFragments.appendChild(fragment);
console.log(ulDomFragments);
// second solution
const ulDomAppend = document.querySelector("#gallery");
const addPhotosWithAppend = images.map((elem) => {
  const create = document.createElement("img");
  create.setAttribute("src", elem.url);
  create.setAttribute("alt", elem.alt);
  create.classList.add("just", "just-2");
  return create;
});
ulDomAppend.append(...addPhotosWithAppend);
console.log(ulDomAppend);

// third solution
const ulDomPrepend = document.querySelector("#gallery");
const addPhotosWithPrepend = images.map((elem) => {
  const create = document.createElement("img");
  create.setAttribute("src", elem.url);
  create.setAttribute("alt", elem.alt);
  create.classList.add("just", "just-3");
  return create;
});
ulDomAppend.prepend(...addPhotosWithPrepend);
console.log(ulDomPrepend);
