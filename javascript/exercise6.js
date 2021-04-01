// Exercise 6
// Show is valid value from input and change color on green if is valid either red
{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Input at less 6 characters"
/> */
}

const body = document.querySelector("body");

const input = document.createElement("input");

input.id = "validation-input";
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Input 6 characters");
input.setAttribute("data-length", "6");

body.appendChild(input);

const validInput = (event) => {
  const {
    selectionStart,
    dataset: { length },
  } = event.target;
  if (selectionStart >= Number(length)) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }
  input.classList.add("invalid");
};
input.addEventListener("input", validInput);

console.log(body);
console.dir(input);
console.log(input.getAttribute("data-length"));
