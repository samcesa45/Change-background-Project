//target element button
const button = document.querySelector("button");
//target body
const body = document.querySelector("body");
//define an array to contain the color
const color = ["red", "yellow", "green", "blue", "#eeedec", "#ccc"];

//add a click event and a callback arrow function to button

button.addEventListener("click", () => {
  //define a random color picker
  const random = Math.floor(Math.random() * color.length);
  body.style.backgroundColor = color[random];
});
