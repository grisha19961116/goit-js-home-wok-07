// Exercise 7
// This script can change inline style by listener
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Magic!</span>

const bodyRef = document.querySelector("body");
const input = document.createElement("input");

input.classList.add("input-last");
input.id = "font-size-control";
input.setAttribute("type", "range");
input.setAttribute("value", "10");

bodyRef.appendChild(input);

const span = document.createElement("span");

span.classList.add("span-last");
span.id = "text";
span.textContent = `Magic!`;

bodyRef.appendChild(span);

const targetLikeValue = ({ target: { valueAsNumber } }) => {
  span.classList.add("span-last__change");
  const res = Math.round(valueAsNumber);
  span.style.fontSize = res + `px`;
  span.style.width = res + `px`;
  span.style.height = res + `px`;

  console.log(`will be change dynamic `, valueAsNumber);
};

input.addEventListener("change", targetLikeValue);

console.log(bodyRef);
