// Exercise 5
//Show value from input
{
  /* <input type="text" placeholder="" id="name-input" />
<h1>Hello, <span id="name-output">noname</span>!</h1> */
}
const body = document.querySelector("body");

const input = document.createElement("input");
input.classList.add("input-class");
input.id = "name-input";
input.setAttribute("placeholder", "Your name?");
input.setAttribute("type", "text");

body.appendChild(input);

const textH1 = document.createElement("h1");
textH1.classList.add("h-class");
textH1.textContent = `Hello , `;

const spanInTextH1 = document.createElement("span");
spanInTextH1.textContent = "noname";
spanInTextP.id = "name-output";
spanInTextP.classList.add("h-class__span");

textH1.appendChild(spanInTextH1);
body.appendChild(textH1);

const changeInput = (event) => {
  spanInTextH1.textContent = event.target.value;
  return spanInTextH1;
};

input.addEventListener("change", changeInput);

console.log(body);
