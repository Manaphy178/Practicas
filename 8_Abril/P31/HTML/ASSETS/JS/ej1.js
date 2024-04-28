const ciudades = ["Cuenca", "Granada", "Soria", "Madrid", "Teruel"];
const app = document.querySelector(".app");
let lista = document.createElement("ul");
ciudades.forEach((ciudad) => {
  let elemento = document.createElement("li");
  elemento.textContent = ciudad;
  if (ciudad == "Madrid") {
    elemento.setAttribute("class", "isidro");
  }
  if (ciudad == "Granada") {
    elemento.setAttribute("title", "Tierra soñada");
  }
  lista.append(elemento);
});
app.append(lista);
