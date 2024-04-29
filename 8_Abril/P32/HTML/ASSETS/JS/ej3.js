const boton = document.querySelector(".btn");
const code = document.querySelector(".color-code");
const box = document.querySelector(".color-container");

boton.addEventListener("click", (event) => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  code.textContent = color;
  box.style.backgroundColor = color;
});
