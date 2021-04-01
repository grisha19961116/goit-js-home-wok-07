// Exercise 4
//Creat counter
/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

const body = document.querySelector("body");

const containerCounter = document.createElement("div");
containerCounter.classList.add("wrapper-for-counter");

const valueCounter = document.createElement("span");
valueCounter.classList.add("value-class");
valueCounter.textContent = 0;

const incrementFn = () => {
  valueCounter.textContent = Number(valueCounter.textContent) + 1;
};

const decrementFn = () => {
  valueCounter.textContent = Number(valueCounter.textContent) - 1;
};

const incrementBtn = document.createElement("button");
incrementBtn.classList.add("first-btn");
incrementBtn.textContent = "+1";
incrementBtn.addEventListener("click", incrementFn);

const decrementBtn = document.createElement("button");
decrementBtn.classList.add("second-btn");
decrementBtn.textContent = "-1";
decrementBtn.addEventListener("click", decrementFn);

containerCounter.appendChild(incrementBtn);
containerCounter.appendChild(valueCounter);
containerCounter.appendChild(decrementBtn);

body.appendChild(containerCounter);
