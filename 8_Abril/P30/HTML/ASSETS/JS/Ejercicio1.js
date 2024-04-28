const textos = document.querySelectorAll("p");
textos.forEach((item) => {
  console.log(item.textContent);
});
const clase = document.querySelectorAll(".parrafo");
clase.forEach((item) => {
  console.log(item.textContent);
});
const modifica = document.querySelectorAll(".parrafo");
modifica.forEach((item) => {
  item.textContent = "Hola Mundo";
});
const añadir = document.querySelectorAll(".parrafo");
añadir.forEach((item) => {
  item.innerHTML += "<span> Infiltrado</span>";
});
