const form = document.querySelector(".form");
const para = document.querySelector(".paragraph");
const input = document.querySelector(".input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  para.textContent = input.value;
  colores();
  form.reset();
});

function colores() {
  if (para.textContent.length <= 5) {
    para.classList.toggle("rojo");
  }
}
